import Button from "@UICOMPONENTS/inputs/Button";
import addAddress from "./addAddress";

type SetAddressModalType = {
  setCurrentSubpage?: any;
  address?: any;
  setInitialValues: any;
  actions: any;
};

const SetAddressModal = ({
  setCurrentSubpage,
  address,
  setInitialValues,
  actions,
}: SetAddressModalType) => {
  const handleClick = (letter: boolean) => {
    addAddress({ ...address, letter });
    setInitialValues({
      ...address,
      houseNumber: address.unitNumber.length > 0 ? address.houseNumber : "",
      unitNumber: "",
    });
    actions.resetForm();
    setCurrentSubpage(1, null, false);
  };

  return (
    <div className="h-full p-2 grid place-items-center text-center">
      <div className={`grid gap-12 text-xl`}>
        {`Map: ${address.mapNumber}`}
        <br />
        <br />
        {`${address.unitNumber ? `${address.unitNumber}/` : ""}${
          address.houseNumber
        } `}
        {`${address.street}, `}
        {`${address.suburb}`}

        <Button
          color="grey"
          clickAction={() => {
            handleClick(true);
          }}
        >
          Letter List
        </Button>
        <Button
          color="grey"
          clickAction={() => {
            handleClick(false);
          }}
        >
          Return List
        </Button>
        <div className="text-primary-500" onClick={() => setCurrentSubpage(1, null, false)}>cancel</div>
      </div>
    </div>
  );
};

export default SetAddressModal;
