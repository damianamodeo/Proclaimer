type ListType = {
	addresses?: any;
};

const List = ({ addresses }: ListType) => {
	function handleClick(e: any) {
		// if (addresses){ console.log("🚀  ~  List  ~  addresses", Object.entries(addresses).map((address => address[1].letter))  )}
	}

	return (
		<div className={` `}>
			{addresses &&
				Object.entries(addresses).reverse().map((address: any) => {
					return (
						<div className="grid grid-cols-12 h-12 border-b dark:border-darkGrey-700">
							<div className="col-span-2 text-center my-auto">
								{address[1].mapNumber}
							</div>
							<div className="col-span-1 text-center my-auto">
								{address[1].unitNumber}
								{address[1].unitNumber && '/'}
								{address[1].houseNumber}
							</div>
							<div className="col-span-5 text-center my-auto">
								{address[1].street}
							</div>
							<div className="col-span-4 text-center my-auto">
								{address[1].suburb}
							</div>
						</div>
					);
				})}
		</div>
	);
};

export default List;
