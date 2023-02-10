import { fdb } from '@SERVICES/firebase/config';
import { doc, updateDoc } from 'firebase/firestore';

type AddressType = {
	id: number;
	user: string;
	mapNumber: string;
	suburb: string;
	street: string;
	houseNumber: string;
	unitNumber: string;
	letter: boolean;
};

type NewAddress = { [k: string]: AddressType };

const addAddress = async (address: AddressType) => {




	const document = doc(fdb, 'notAtHomes', 'MaitlandCongregation');
	const newAddress: NewAddress = {};
	const id = 'id' + Date.now();
	newAddress[id] = {
		id: Date.now(),
		user: 'userID',
		mapNumber: address.mapNumber || 'N/A',
		suburb: address.suburb,
		street: address.street,
		houseNumber: address.houseNumber,
		unitNumber: address.unitNumber || '',
		letter: address.letter || false,
	};
	await updateDoc(document, newAddress);
};

export default addAddress;
