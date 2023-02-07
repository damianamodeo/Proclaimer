import Button from '@UICOMPONENTS/inputs/Button';
import { auth } from '@SERVICES/firebase/config';
import { signOut } from 'firebase/auth';

type AuthType = {
	children?: any;
};

const LogOut = ({ children }: AuthType) => {

	const logOut = async () => {
		try {
			await signOut(auth);
		} catch (err) {
			alert(err);
		}
	};

	return (
		<div className="mx-auto p-10 grid gap-4 w-96">
			<Button
				color="secondary"
				clickAction={logOut}
				longPressAction={logOut}
			>
				Log Out
			</Button>
		</div>
	);
};

export default LogOut;
