import { fdb } from "@SERVICES/firebase/config";
import { doc, updateDoc } from "firebase/firestore";

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

const addAddress = async (address: AddressType, id: any) => {
  const document = doc(fdb, "notAtHomes", "MaitlandCongregation");
  const newAddress: NewAddress = {};
  newAddress[id] = {
    ...address,
  };
  await updateDoc(document, newAddress);
};

export default addAddress;
