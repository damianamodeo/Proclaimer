import { fdb } from '@SERVICES/firebase/config';
import Button from '@UICOMPONENTS/inputs/Button';
import FormikForm from '@UICOMPONENTS/inputs/FormikForm';
import Input from '@UICOMPONENTS/inputs/Input';
import {
	doc,
	runTransaction,
	arrayUnion,
	onSnapshot,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';

type TransactionsType = {
	children?: any;
};

const Addresses = () => {
	const [addresses, setAddresses] = useState(<div></div>);
	useEffect(() => {
		const unsub = onSnapshot(doc(fdb, 'Congregation', 'addresses'), (doc) => {
			console.log('Current data: ', doc.data()?.notAtHomes);
			setAddresses(
				doc.data()?.notAtHomes.map((address: any, key: any) => {
					return (
						<div key={key}>
							MapID: {address.mapID} - Address:{address.unitNumber}{' '}
							{address.houseNumber} {address.street}, {address.suburb}
						</div>
					);
				})
			);
		});

		return unsub;
	}, []);

	return <>{addresses}</>;
};

const Transactions = ({ children }: TransactionsType) => {
	const [addresses, setAddresses] = useState(<div></div>);

  const addToArray = async (values: any) => {


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
								mapID: values.mapID,
								suburb: values.suburb,
								street: values.street,
								houseNumber: values.houseNumber,
								unitNumber: values.unitNumber || "",
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
    
    localStorage.setItem("lastEditedSuburb", values.suburb || "")
    localStorage.setItem("lastEditedStreet", values.street || "")
    localStorage.setItem("lastEditedHouseNumber", values.houseNumber || "")
    localStorage.setItem("lastEditeUnitNumber", values.unitNumber || "")
    localStorage.setItem("lastEditedMapID", values.mapID || "")
	};

	useEffect(() => {
		const unsub = onSnapshot(doc(fdb, 'Congregation', 'addresses'), (doc) => {
			console.log('Current data: ', doc.data()?.notAtHomes);
			setAddresses(doc.data()?.notAtHomes);
		});

		return unsub;
	}, []);

	return (
		<div className={`m-auto p-12`}>
			<FormikForm
				initialValues={{
					suburb: localStorage.lastEditedSuburb,
					street: localStorage.lastEditedStreet,
					houseNumber: localStorage.lastEditedHouseNumber,
					unitNumber: localStorage.lastEditedUnitNumber,
					mapID: localStorage.lastEditedMapID,
				}}
				onSubmit={(values: any) => {
					console.log(values);
					addToArray(values);
				}}
			>
				<div className="m-10 grid gap-6 ">
					<Input
						inputType="text"
						label="Map ID"
						name="mapID"
						placeholder="Add text"
					></Input>
					<Input
						inputType="text"
						label="Suburb"
						name="suburb"
						placeholder="Add text"
					></Input>
					<Input
						inputType="text"
						label="Street"
						name="street"
						placeholder="Add text"
					></Input>
					<Input
						inputType="text"
						label="House Number"
						name="houseNumber"
						placeholder="Add text"
					></Input>
					<Input
						inputType="text"
						label="Unit Number"
						name="unitNumber"
						placeholder="Add text"
					></Input>
					<Button
						color="primary"
						clickAction={'submit'}
						longPressAction={'submit'}
					>
						Submit
					</Button>
				</div>
			</FormikForm>

			<Addresses></Addresses>
		</div>
	);
};

export default Transactions;
