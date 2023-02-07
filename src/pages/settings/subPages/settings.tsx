import Carousel from '@UICOMPONENTS/containers/Carousel';
import Content from '@UICOMPONENTS/containers/Content';
import Header from '@UICOMPONENTS/containers/Header';
import Modal from '@UICOMPONENTS/containers/Modal';
import Button from '@UICOMPONENTS/inputs/Button';
import FormikForm from '@UICOMPONENTS/inputs/FormikForm';
import Input from '@UICOMPONENTS/inputs/Input';
import { useState } from 'react';

const headerComponent = () => {
	return (
		<Header
			headerLeft={null}
			title={'Settings'}
			headerRight={''}
		></Header>
	);
};

const contentComponent = ({ setCurrentSubpage }: any) => {
	return (
		<Content>
			<FormikForm
				initialValues={{ firstInput: '', secondInput: false }}
				onSubmit={(values: any) => console.log(values)}
			>
				<div className="m-10 grid gap-6 ">
					<Input
						inputType="text"
						label="Text"
						name="firstInput"
						placeholder="Add text"
					></Input>
					<Input
						inputType="switch"
						label="Switch"
						name="secondInput"
					></Input>
					<Button
						color="primary"
						clickAction={'submit'}
						longPressAction={'submit'}
					>
						Submit
					</Button>
				</div>
			</FormikForm>
		</Content>
	);
};
const pageThree = { headerComponent, contentComponent };

export default pageThree;
