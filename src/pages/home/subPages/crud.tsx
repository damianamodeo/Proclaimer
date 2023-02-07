import Transactions from '@PAGES/home/subPages/subPages/crud/AddAddress';
import Carousel from '@UICOMPONENTS/containers/Carousel';
import Content from '@UICOMPONENTS/containers/Content';
import Header from '@UICOMPONENTS/containers/Header';

const headerComponent = ({ setCurrentSubpage }: any) => {
	return (
		<Header
			headerLeft={
				<div
					className="p-2"
					onClick={() => {
						setCurrentSubpage(1, -1);
					}}
				>
					Back
				</div>
			}
			title="CRUD"
			headerRight={''}
		></Header>
	);
};

const contentComponent = ({ setCurrentSubpage }: any) => {
	return (
		<Content>
			<Carousel
      carouselItems={[
        { title: 'one', content: <Transactions></Transactions> },
        { title: 'two', content: <div> lorem500 </div> },
      ]}
      ></Carousel>
		</Content>
	);
};

const pageOne = { headerComponent, contentComponent };

export default pageOne;
