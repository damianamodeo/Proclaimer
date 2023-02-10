import { doc, runTransaction, arrayUnion } from 'firebase/firestore';
import { fdb } from '@SERVICES/firebase/config';
import { useEffect } from 'react';
import FormikForm from '@UICOMPONENTS/inputs/FormikForm';
import Input from '@UICOMPONENTS/inputs/Input';
import Button from '@UICOMPONENTS/inputs/Button';

type AddType = {
	addresses?: any;
};

const Add = ({ addresses }: AddType) => {
	const addToArrayTwo = async (values: any) => {
		if (values.mapID === localStorage.lastEditedMapID) {
			const docRef = doc(fdb, 'Congregation', 'addresses');
			try {
				await runTransaction(fdb, async (transaction) => {
					const addressesDoc: any = await transaction.get(docRef);
					if (!addressesDoc.data().mapIDs.includes(values.mapID) === true) {
						transaction.set(
							docRef,
							{
								mapIDs: arrayUnion(values.mapID),
							},
							{ merge: true }
						);
						console.log('New MapID successfully committed!');
						return;
					}
					console.log('MapID already existed!');
					return;
				});
			} catch (e) {
				console.log('Transaction failed: ', e);
			}
		}

		localStorage.setItem('lastEditedSuburb', values.suburb || '');
		localStorage.setItem('lastEditedStreet', values.street || '');
		localStorage.setItem('lastEditedHouseNumber', values.houseNumber || '');
		localStorage.setItem('lastEditeUnitNumber', values.unitNumber || '');
		localStorage.setItem('lastEditedMapID', values.mapID || '');
	};

	return (
		<div className={`mx-2`}>
			<FormikForm
				initialValues={{ mapID: '', suburb: '' }}
				onSubmit={(values: any) => {
					console.log(values);
					addToArrayTwo(values);
				}}
			>
				<div className="m-10 grid gap-6 ">
					<Input
						inputType="text"
						label="Map ID"
						name="mapID"
					></Input>
					<Input
						inputType="text"
						name="suburb"
						label="Suburb"
					></Input>
				</div>
			</FormikForm>
		</div>
	);
};

export default Add;
