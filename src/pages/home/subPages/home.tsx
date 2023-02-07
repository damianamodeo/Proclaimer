import Content from '@UICOMPONENTS/containers/Content';
import Header from '@UICOMPONENTS/containers/Header';
import Button from '@UICOMPONENTS/inputs/Button';

const headerComponent = ({ setCurrentSubpage }: any) => {
	return (
		<Header
			headerLeft={<div className=""></div>}
			title="Firebase"
			headerRight={
				<div
					className=""
				>
				</div>
			}
		></Header>
	);
};

const contentComponent = ({ setCurrentSubpage }: any) => {
	return (
		<Content>
			<div className='m-auto'>
				<div className="w-96">

				<Button
					color="primary"
					clickAction={() => setCurrentSubpage(1, 1)}
					>
					Authentication
				</Button>
					</div>
				<br />
				<div className="w-96">
				<Button
					color="primary"
					clickAction={() => setCurrentSubpage(2, 1)}
					>
					CRUD
				</Button>
					</div>
			</div>
		</Content>
	);
};

const pageOne = { headerComponent, contentComponent };

export default pageOne;
