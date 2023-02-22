import Button from "@UICOMPONENTS/inputs/Button";
import addAddress from "./updateAddress";
import EditForm from "./EditForm";
import deleteAddress from "./deleteAddress";

type SetAddressModalType = {
  setCurrentSubpage?: any;
  address?: any;
};

const SetAddressModal = ({
  setCurrentSubpage,
  address,
}: SetAddressModalType) => {
  return (
    <div className="h-full grid place-items-center">
      <div className="grid place-items-center gap-6">
        <div className="text-xl text-center grid gap-4 pb-8">
          <div>{` Map: ${address[1].mapNumber}`}</div>
          {`${address[1].unitNumber}${address[1].unitNumber && "/"}${
            address[1].houseNumber
          } ${address[1].street}, ${address[1].suburb}`}
        </div>
        Are you sure you want to delete this address?
        <Button
          color="error"
          clickAction={() => {
            deleteAddress(address);
            setCurrentSubpage(1, null, false);
          }}
        >
          Confirm Delete
        </Button>
        <div
          className="text-primary-500"
          onClick={() => setCurrentSubpage(1, null, false)}
        >
          cancel
        </div>
      </div>
    </div>
  );
};

export default SetAddressModal;
