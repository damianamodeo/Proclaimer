import NavbarItem from "@UICOMPONENTS/containers/NavbarItem";
import { ReactComponent as Home } from '@UICOMPONENTS/svgs/Home.svg';

const HomeItem = () => {
	return (
		<NavbarItem
			icon={<Home className="text-[1.4rem]" />}
			label="Home"
		/>
	);
};

export default Home