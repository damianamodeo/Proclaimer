import Button from "@UICOMPONENTS/inputs/Button";
import EditForm from "../../record/list/EditForm";

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
        <div className="text-primary-500 pb-16"  onClick={() => setCurrentSubpage(2, null, false)}>
          cancel
        </div> 
      </div>
    </>
  );
};

export default SetAddressModal;
