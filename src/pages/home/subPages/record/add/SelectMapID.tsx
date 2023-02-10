import Button from '@UICOMPONENTS/inputs/Button';
import Input from '@UICOMPONENTS/inputs/Input';

type SelectMapIDType = {
	children?: any;
};

const SelectMapID = ({ children }: SelectMapIDType) => {
	return (
		<>
			 {localStorage.lastEditedMapID ? (
				localStorage.lastEditedMapID
			) : (
				<Input
					inputType="autocomplete"
					label="Map ID"
					name="mapID"
					placeholder=""
					options={[
						{ key: 'Ashtonfield', value: 'Ashtonfield' },
						{ key: 'Metford1', value: 'Metford1' },
						{ key: 'Metford2', value: 'Metford2' },
						{ key: 'Metford3', value: 'Metford3' },
						{ key: 'Metford4', value: 'Metford4' },
						{ key: 'Metford5', value: 'Metford5' },
						{ key: 'Metford6', value: 'Metford6' },
						{ key: 'Metford7', value: 'Metford7' },
						{ key: 'Metford8', value: 'Metford8' },
						{ key: 'Metford9', value: 'Metford9' },
						{ key: 'Metford0', value: 'Metford0' },
						{ key: 'Metford', value: 'Metford' },
						{ key: 'Metford', value: 'Metford' },
						{ key: 'Maitland', value: 'Maitland' },
					]}
				></Input>
			)}
			<Button
				clickAction={() => {
					localStorage.removeItem('lastEditedMapID');
				}}
				color={'primary'}
			>
				change
			</Button>{' '}
		</>
	);
};

export default SelectMapID;
