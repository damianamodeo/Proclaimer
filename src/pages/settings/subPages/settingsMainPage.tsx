import Content from '@UICOMPONENTS/containers/Content';
import Header from '@UICOMPONENTS/containers/Header';

const headerComponent = () => {
	return (
		<Header
			headerLeft=""
			title="Settings"
			headerRight=""
		></Header>
	);
};

const contentComponent = ({ setCurrentSubpage }: any) => {
	return (
		<Content>
      <div>Settings</div>
		</Content>
	);
};

const page = { headerComponent, contentComponent };

export default page;
