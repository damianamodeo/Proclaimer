import Button from "@UICOMPONENTS/inputs/Button";
import addAddress from "./updateAddress";
import EditForm from "./EditForm";

type SetAddressModalType = {
  setCurrentSubpage?: any;
  address?: any;
};

const SetAddressModal = ({
  setCurrentSubpage,
  address,
}: SetAddressModalType) => {
  return (
    <>
      <EditForm address={address} cancel={() => setCurrentSubpage(1, null, false)}></EditForm>
      <div className="grid place-items-center">
        <div className="text-primary-500 pb-16"  onClick={() => setCurrentSubpage(1, null, false)}>
          cancel
        </div> 
      </div>
    </>
  );
};

export default SetAddressModal;
