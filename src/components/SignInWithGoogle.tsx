import Button from '@UICOMPONENTS/inputs/Button';
import { auth, googleProvider } from '@SERVICES/firebase/config';
import { signInWithPopup } from 'firebase/auth';

type AuthType = {
	children?: any;
};

const Auth = ({ children }: AuthType) => {
	const signInWithGoogle = async (data: any) => {
		try {
			await signInWithPopup(auth, googleProvider);
		} catch (err) {
			alert(err);
		}
	};

	return (
		<div className={``}>
			<div className="mx-6 p-10 grid gap-4">
				<Button
					color="secondary"
					clickAction={signInWithGoogle}
					longPressAction={signInWithGoogle}
				>
					Sign in with Google
				</Button>
			</div>
		</div>
	);
};

export default Auth;
