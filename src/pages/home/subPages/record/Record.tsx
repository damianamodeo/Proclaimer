import Add from '@PAGES/home/subPages/record/add/Add';
import Trans from '@PAGES/home/subPages/record/Transactions copy';
import { fdb } from '@SERVICES/firebase/config';
import Carousel from '@UICOMPONENTS/containers/Carousel';
import Content from '@UICOMPONENTS/containers/Content';
import Header from '@UICOMPONENTS/containers/Header';
import { ReactComponent as BackArrow } from '@UICOMPONENTS/svgs/BackArrow.svg';
import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const headerComponent = ({ setCurrentSubpage }: any) => {
	return (
		<Header
			headerLeft={
				<div
					className="flex content-center"
					onClick={() => setCurrentSubpage(0, -1)}
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
	const [addresses, setAddresses] = useState(()=>{return});

	function handleRecordNotAtHomes(e: any) {
		throw new Error('Function not implemented.');
	}

	useEffect(() => {
		const unsub = onSnapshot(doc(fdb, 'Congregation', 'addresses'), (doc) => {
			console.log('Current data: ', doc.data());
			setAddresses(()=>doc.data());
		});

		return unsub;
	}, []);

	return (
		<Content>
			<Carousel
				carouselItems={[
					{ title: 'Add Address', content: <Add addresses={addresses}></Add> },
					{ title: 'List', content: <Trans addresses={addresses}></Trans> },
				]}
			></Carousel>
		</Content>
	);
};

const page = { headerComponent, contentComponent };

export default page;
