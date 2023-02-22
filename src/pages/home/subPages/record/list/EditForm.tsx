import { useRef, useState } from "react";
import FormikForm from "@UICOMPONENTS/inputs/FormikForm";
import Input from "@UICOMPONENTS/inputs/Input";
import Button from "@UICOMPONENTS/inputs/Button";
import Modal from "@PAGES/home/subPages/record/add/AddModal";
import updateAddress from "./updateAddress";

type AddressFormType = {
  address?: any;
  cancel?: any;
};

const AddressForm = ({ address, cancel }: AddressFormType) => {
  const [initialValues, setInitialValues] = useState(address[1]);

  return (
    <>
      <FormikForm
        initialValues={initialValues}
        onSubmit={(values: any, actions: any) => {
          updateAddress(values, address[0]);
          cancel() 
        }}
        onChange={()=>{return}}
      >
        <div className="m-10 grid gap-4 ">
          <Input inputType="text" name="mapNumber" label="Map ID"></Input>
          <Input inputType="text" name="suburb" label="Suburb"></Input>
          <Input inputType="text" name="street" label="Street"></Input>
          <Input inputType="text" name="houseNumber" label="House"></Input>
          <Input inputType="text" name="unitNumber" label="Unit"></Input>
          <Input inputType="switch" name="letter" label="Letter List"></Input>
          <Button color="grey" submit>
            Update
          </Button>
        </div>
      </FormikForm>
    </>
  );
};

export default AddressForm;
