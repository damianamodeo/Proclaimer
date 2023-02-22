import { fdb } from "@SERVICES/firebase/config";
import { deleteField, doc, updateDoc } from "firebase/firestore";

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


const deleteAddress = async (address: any) => {
  const document = doc(fdb, "notAtHomes", "MaitlandCongregation");
  await updateDoc(document, { [address[0]]: deleteField()});
};

export default deleteAddress;
