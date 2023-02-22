import settingsPages from "@PAGES/settings/settingsPages";
import homePages from "@PAGES/home/homePages";
import Navbar from "@UICOMPONENTS/containers/Navbar";
import Screen from "@UICOMPONENTS/containers/Screen";
import { useState } from "react";
import { ReactComponent as Home } from "@UICOMPONENTS/svgs/Home.svg";
import { ReactComponent as Settings } from "@UICOMPONENTS/svgs/Settings.svg";

const Start = () => {
  const HomeNavbarItem = {
    icon: <Home className="text-[1.4rem]" />,
    label: "Home",
  };

  const SettingsNavbarItem = {
    icon: <Settings className="text-[1.4rem]" />,
    label: "Settings",
  };

  const [currentPage, setCurrentPage] = useState<number>(0);
  const pages = [homePages, settingsPages];
  const navbarItems = [HomeNavbarItem, SettingsNavbarItem];

  return (
    <Screen
      pages={pages}
      currentPage={currentPage}
      navbar={
        <Navbar
          currentPage={currentPage}
          action={setCurrentPage}
          navbarItems={navbarItems}
        />
      }
    ></Screen>
  );
};

export default Start;
