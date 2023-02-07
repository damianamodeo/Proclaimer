import { fdb } from '@SERVICES/firebase/config';
import Button from '@UICOMPONENTS/inputs/Button';
import {
	doc,
	runTransaction,
	arrayUnion,
	arrayRemove,
	onSnapshot,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';

type TransactionsType = {
	children?: any;
};

const Transactions = ({ children }: TransactionsType) => {
	const [addresses, setAddresses] = useState([]);
	const [streets, setStreets] = useState([]);

	const addToArray = async () => {
		const docRef = doc(fdb, 'Congregation', 'addresses');
		try {
			await runTransaction(fdb, async (transaction) => {
				const sfDoc = await transaction.get(docRef);
				if (sfDoc.exists()) {
					transaction.set(
						docRef,
						{
							notAtHomes: arrayUnion({
								userID: 12,
								mapID: 12,
								suburb: 'Thornton',
								street: 'Woodlands Drive',
								houseNumber: '59',
								unitNumber: '5',
								timeStamp: new Date(),
								lat: -32.7730588,
								lng: 151.5851958,
							}),
						},
						{ merge: true }
					);
					return;
				}
			});

			console.log('Transaction successfully committed!');
		} catch (e) {
			console.log('Transaction failed: ', e);
		}
	};

	const removeFromArray = async (address: any) => {
		const docRef = doc(fdb, 'Congregation', 'addresses');
		try {
			await runTransaction(fdb, async (transaction) => {
				const sfDoc = await transaction.get(docRef);
				if (sfDoc.exists()) {
					const test = transaction.set(
						docRef,
						{
							notAtHomes: arrayRemove(address),
						},
						{ merge: true }
					);

					console.log('🚀  ~  awaitrunTransaction  ~  test', test);

					return;
				}
			});

			console.log('Transaction successfully committed!');
		} catch (e) {
			console.log('Transaction failed: ', e);
		}
	};

	useEffect(() => {
		const unsub = onSnapshot(doc(fdb, 'Congregation', 'addresses'), (doc) => {
			console.log('Current data: ', doc.data()?.notAtHomes);
			setAddresses(doc.data()?.notAtHomes);
		});

		// const q = query(notAtHomes, where("cong", "==", "mmm"));
		// const unsubscribe = onSnapshot(q, (snapshot) => {
		//   setAddresses(
		//     snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[0]
		//   );
		// });

		return unsub;
	}, []);

	return (
		<div className={`m-auto p-12`}>
			<Button
				clickAction={addToArray}
				color="primary"
			>
				Add Address to Not At Homes
			</Button>
			<Button
				clickAction={() => addToArray()}
				color="primary"
			>
				Remove Address from Not At Homes
			</Button>
		</div>
	);
};

export default Transactions;
