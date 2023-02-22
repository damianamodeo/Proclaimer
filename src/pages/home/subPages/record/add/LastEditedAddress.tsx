type LastEditedAddressType = {
  addresses?: any;
};

const LastEditedAddress = ({ addresses }: LastEditedAddressType) => {
  return (
    <>
      <div className="text-center mt-4 font-bold">Last submitted address:</div>
      <div className="text-center">
        {addresses &&
          Object.entries(addresses)
            ?.reverse()
            .map((address: any) => {
              return (
                <div>
                  <div>{` Map: ${address[1].mapNumber}`}</div>
                  {`${address[1].unitNumber}${address[1].unitNumber && "/"}${
                    address[1].houseNumber
                  } ${address[1].street} ${address[1].suburb}`}
                </div>
              );
            })[0]}
      </div>
    </>
  );
};

export default LastEditedAddress;
