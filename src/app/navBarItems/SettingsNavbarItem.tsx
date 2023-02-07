import NavbarItem from "@UICOMPONENTS/containers/NavbarItem";
import { ReactComponent as Settings } from '@UICOMPONENTS/svgs/Settings.svg';

const SettingsNavbarItem = () => {
	return (
		<NavbarItem
			icon={<Settings className="text-[1.4rem]" />}
			label="Settings"
		/>
	);
};

export default SettingsNavbarItem