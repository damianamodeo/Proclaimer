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
  lng: number;
  lat: number;
};

type NewAddress = { [k: string]: AddressType };

const addAddress = async (address: AddressType) => {
  const searchQuery = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address.houseNumber}%20${address.houseNumber}%20${address.suburb}.json`;

  const response: any = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/` +
      `${address.houseNumber}%20` +
      `${address.street}%20` +
      `${address.suburb}.json?` +
      `access_token=pk.eyJ1IjoiZGFtaWFuYW1vZGVvIiwiYSI6ImNqeWxnb3lsejA4OXozYmxpajhzMXdvZjQifQ.OJBOK5ZvGEX2VaScbW_zUQ`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.features[0].center;
    });
  console.log("response", response);

  const document = doc(fdb, "notAtHomes", "MaitlandCongregation");
  const newAddress: NewAddress = {};
  const id = "id" + Date.now();
  newAddress[id] = {
    id: Date.now(),
    user: localStorage.getItem("userID") || "",
    mapNumber: address.mapNumber || "N/A",
    suburb: address.suburb,
    street: address.street,
    houseNumber: address.houseNumber,
    unitNumber: address.unitNumber || "",
    letter: address.letter || false,
    lng: response[0],
    lat: response[1],
  };
  await updateDoc(document, newAddress);
};

export default addAddress;
