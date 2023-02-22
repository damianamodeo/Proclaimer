import Add from "@PAGES/home/subPages/record/add/Add";
import { fdb } from "@SERVICES/firebase/config";
import Carousel from "@UICOMPONENTS/containers/Carousel";
import Content from "@UICOMPONENTS/containers/Content";
import Header from "@UICOMPONENTS/containers/Header";
import { ReactComponent as BackArrow } from "@UICOMPONENTS/svgs/BackArrow.svg";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import Map from "./map/Map";

const headerComponent = ({ setCurrentSubpage }: any) => {
  return (
    <Header
      headerLeft={
        <div
          className="flex content-center"
          onClick={() => {
            setCurrentSubpage(0, -1, null, null);
          }}
        >
          <BackArrow className="text-[1.7rem]" /> Home
        </div>
      }
      title="Record"
      headerRight=""
    ></Header>
  );
};

const contentComponent = ({ setCurrentSubpage }: any) => {
  const [renderMap, setRenderMap] = useState(false)
  
  const [addresses, setAddresses] = useState(() => {
    return;
  });

  useEffect(() => {
    const unsub = onSnapshot(
      doc(fdb, "notAtHomes", "MaitlandCongregation"),
      (doc) => {
        setAddresses(() => doc.data());
        setRenderMap(true)
      }
    );

    return unsub;
  }, []);

  return (
    <Content>
      <Carousel
        carouselItems={[
          {
            title: "Map",
            content: (
              renderMap ? <Map
                addresses={addresses}
                setCurrentSubpage={setCurrentSubpage}
              ></Map> : <div></div>
            ),
          },
        ]}
      ></Carousel>
    </Content>
  );
};

const page = { headerComponent, contentComponent };

export default page;
