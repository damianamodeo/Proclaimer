import { useRef, useState } from 'react';
import FormikForm from '@UICOMPONENTS/inputs/FormikForm';
import Input from '@UICOMPONENTS/inputs/Input';
import Button from '@UICOMPONENTS/inputs/Button';
import addAddress from '@PAGES/home/subPages/record/add/addAddress';
import ConfirmSubmitModal from '@PAGES/home/subPages/record/add/ConfirmSubmitModal';

type AddType = {
	addresses?: any;
};

const Add = ({ addresses }: AddType) => {
	const [modal, setModal] = useState(false);

	const submitRef = useRef<HTMLButtonElement | null>(null);
	let letterList: boolean = false;
	const setLetterList = (value: any) => {
		setModal(true);
		letterList = value;
		submitRef.current?.click();
	};

	const onChange = (e: any) => {
		localStorage.setItem(`lastEdited${e.target.name}`, e.target.value);
	};

	return (
		<div className={`mx-2`}>
			{modal && <ConfirmSubmitModal></ConfirmSubmitModal>}
			<FormikForm
				initialValues={{
					mapNumber: localStorage.getItem("lastEditedmapNumber"),
					suburb: localStorage.getItem("lastEditedsuburb"),
					street: localStorage.getItem("lastEditedstreet"),
					houseNumber: "",//localStorage.getItem("lastEditedhouseNumber"),
					unitNumber: "",//localStorage.getItem("lastEditedunitNumber"),
					letter: false,
				}}
				onSubmit={(address: any) => {
					addAddress({ ...address, letter: letterList });
				}}
				onChange={onChange}
			>
				<div className="m-10 grid gap-4 ">
					<Input
						inputType="text"
						label="Map ID"
						name="mapNumber"
					></Input>
					<Input
						inputType="text"
						name="suburb"
						label="Suburb"
					></Input>
					<Input
						inputType="text"
						name="street"
						label="Street"
					></Input>
					<Input
						inputType="text"
						name="houseNumber"
						label="House"
					></Input>
					<Input
						inputType="text"
						name="unitNumber"
						label="Unit"
					></Input>
				</div>
				<div className="flex justify-center">
					<Button
						clickAction={null}
						longPressAction={(e: any) => {
							setLetterList(true);
						}}
						delay={300}
						color="grey"
					>
						Letter List
					</Button>
					<Button
						clickAction={null}
						longPressAction={(e: any) => {
							setLetterList(false);
						}}
						delay={300}
						color="grey"
					>
						Return List
					</Button>
					<button
						type="submit"
						ref={submitRef}
					></button>
				</div>
				<div className="text-center mt-12 font-bold">
					{' '}
					Last submitted address:
				</div>
				<div className="text-center">
					{addresses &&
						Object.entries(addresses)
							?.reverse()
							.map((address: any) => {
								return (
									<div>
										<div>{` Map: ${address[1].mapNumber}`}</div>
										{`${address[1].unitNumber}${address[1].unitNumber && '/'}${
											address[1].houseNumber
										} ${address[1].street} ${address[1].suburb}`}
									</div>
								);
							})[0]}
				</div>
			</FormikForm>
		</div>
	);
};

export default Add;
