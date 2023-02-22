import { LongPress } from "@UICOMPONENTS/inputs/LongPress";
import deleteAddress from "./deleteAddress";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";

type ListType = {
  addresses?: any;
  setCurrentSubpage?: any;
};

const List = ({ addresses, setCurrentSubpage }: ListType) => {
  const handleClick = (address: any) => {
    setCurrentSubpage(
      1,
      null,
      true,
      <EditModal
        setCurrentSubpage={setCurrentSubpage}
        address={address}
      ></EditModal>
    );
  };
  const handleLongPress = (address: any) => {
    setCurrentSubpage(
      1,
      null,
      true,
      <DeleteModal
        setCurrentSubpage={setCurrentSubpage}
        address={address}
      ></DeleteModal>
    );
  };

  return (
    <div className={`pb-16`}>
      {addresses &&
        Object.entries(addresses)
        .filter((address: any) => { return address[1].user === localStorage.getItem("userID")})
          .reverse()
          .map((address: any, key: number) => {
            return (
              <div
                key={key}
                onClick={() => handleClick(address)}
                className="grid grid-cols-12 h-12 border-b dark:border-darkGrey-700 text-sm text-center"
              >
                <div className="col-span-2 px-2 my-auto font-bold">
                  {address[1].mapNumber}
                </div>
                <div className="col-span-1 px-2 my-auto">
                  {`${address[1].unitNumber && `${address[1].unitNumber}/`}${
                    address[1].houseNumber
                  }`}
                </div>
                <div className="col-span-4 my-auto">
                  {`${address[1].street}`}
                </div>
                <div className="col-span-4 my-auto">{address[1].suburb}</div>
                <div className="col-span-1 px-2 text-right my-auto">
                  <LongPress action={() => handleLongPress(address)}>
                    {`${address[1].letter ? "L X" : "X"}`}
                  </LongPress>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default List;
