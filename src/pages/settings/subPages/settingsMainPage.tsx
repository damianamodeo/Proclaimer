import Content from "@UICOMPONENTS/containers/Content";
import Header from "@UICOMPONENTS/containers/Header";

const headerComponent = () => {
  return <Header headerLeft="" title="Settings" headerRight=""></Header>;
};

const contentComponent = ({ setCurrentSubpage }: any) => {
  const buildTime = import.meta.env.VITE_APP_BUILD_TIME
    ? import.meta.env.VITE_APP_BUILD_TIME * 1000
    : Date.now();
  const formattedDateAndTime = new Intl.DateTimeFormat("en-AU", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(buildTime);

  console.log("~~~ ~ contentComponent ~ date TEST", buildTime);

  return (
    <Content>
      <div className="p-4">Build Time: {formattedDateAndTime}</div>
    </Content>
  );
};

const page = { headerComponent, contentComponent };

export default page;
