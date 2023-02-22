import { useState } from "react";
import FormikForm from "@UICOMPONENTS/inputs/FormikForm";
import Input from "@UICOMPONENTS/inputs/Input";
import Button from "@UICOMPONENTS/inputs/Button";
import LastEditedAddress from "./LastEditedAddress";
import Modal from "@PAGES/home/subPages/record/add/AddModal";
import AddressForm from "./AddForm";

type AddType = {
  addresses?: any;
  setCurrentSubpage?: any;
};

const Add = ({ addresses, setCurrentSubpage }: AddType) => {
  const string = "hksdf sdlfgh dfjh skjhdgedhvg cvbfg xdhfgd hfg ho; ;hdf g hjkhg dklfjsgh flihug fkhj"
   return (
    <>
      <div className={`mx-2`}>
        <AddressForm setCurrentSubpage={setCurrentSubpage}></AddressForm>
        <LastEditedAddress addresses={addresses}></LastEditedAddress>
      </div>
    </>
  );
};

export default Add;
