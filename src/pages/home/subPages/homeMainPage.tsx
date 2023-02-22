import Content from '@UICOMPONENTS/containers/Content';
import Header from '@UICOMPONENTS/containers/Header';
import Button from '@UICOMPONENTS/inputs/Button';

const headerComponent = () => {
	return (
		<Header
			headerLeft=""
			title="Home"
			headerRight=""
		></Header>
	);
};

const contentComponent = ({ setCurrentSubpage }: any) => {
	function handleRecordNotAtHomes(e: any) {
		throw new Error('Function not implemented.');
	}

	return (
		<Content>
			<div className="mx-10 mt-8 grid grid-cols-1 gap-8">
				<Button
					clickAction={(e: any) => {
						setCurrentSubpage(1,1);
					}}
					longPressAction={(e: any) => {
						setCurrentSubpage(1,1);
					}}
					delay={500}
					color="grey"
				>
					Record
				</Button>

				<Button
					clickAction={(e: any) => {
						handleRecordNotAtHomes(e);
					}}
					longPressAction={(e: any) => {
						handleRecordNotAtHomes(e);
					}}
					delay={500}
					color="grey"
				>
					Return
				</Button>
				<Button
					clickAction={(e: any) => {
						handleRecordNotAtHomes(e);
					}}
					longPressAction={(e: any) => {
						handleRecordNotAtHomes(e);
					}}
					delay={500}
					color="grey"
				>
					Write
				</Button>
			</div>
		</Content>
	);
};

const page = { headerComponent, contentComponent };

export default page;
