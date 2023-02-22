import { useState } from "react";
import FormikForm from "@UICOMPONENTS/inputs/FormikForm";
import Input from "@UICOMPONENTS/inputs/Input";
import Button from "@UICOMPONENTS/inputs/Button";
import AddModal from "@PAGES/home/subPages/record/add/AddModal";

type AddressFormType = {
  setCurrentSubpage?: any;
};

const AddressForm = ({ setCurrentSubpage }: AddressFormType) => {
  const [initialValues, setInitialValues] = useState({
    mapNumber: localStorage.getItem("lastEditedmapNumber") || "",
    suburb: localStorage.getItem("lastEditedsuburb") || "",
    street: localStorage.getItem("lastEditedstreet") || "",
    houseNumber: localStorage.getItem("lastEditedhouseNumber") || "",
    unitNumber: localStorage.getItem("lastEditedunitNumber") || "",
  });

  const showModal = (address: any, actions: any) => {
    setCurrentSubpage(
      1,
      null,
      true,
      <AddModal
        setCurrentSubpage={setCurrentSubpage}
        address={address}
        actions={actions}
        setInitialValues={setInitialValues}
      ></AddModal>
    );
  };

  const onChange = (e: any) => {
    localStorage.setItem(`lastEdited${e.target.name}`, e.target.value);
  };

  return (
    <FormikForm
      initialValues={initialValues}
      onSubmit={(address: any, actions: any) => {
        showModal(address, actions);
      }}
      onChange={onChange}
    >
      <div className="m-10 grid gap-4 ">
        <Input inputType="text" name="mapNumber" label="Map ID"></Input>
        <Input inputType="text" name="suburb" label="Suburb"></Input>
        <Input inputType="text" name="street" label="Street"></Input>
        <Input inputType="text" name="houseNumber" label="House"></Input>
        <Input inputType="text" name="unitNumber" label="Unit"></Input>
        <Button color="grey" submit>
          Submit
        </Button>
      </div>
      <div className="flex justify-center w-full">
      </div>
    </FormikForm>
  );
};

export default AddressForm;
