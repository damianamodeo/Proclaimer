import Input from '@UICOMPONENTS/inputs/Input';
import FormikForm from '@UICOMPONENTS/inputs/FormikForm';
import Button from '@UICOMPONENTS/inputs/Button';
import { auth } from '@SERVICES/firebase/config';
import { sendPasswordResetEmail } from 'firebase/auth';

type AuthType = {
	children?: any;
};

const Auth = ({ children }: AuthType) => {
	const handleSubmit = (data: any) => {
		try {
			return sendPasswordResetEmail(auth, data.email);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className={``}>
			<FormikForm
				initialValues={{ email: '', password: '' }}
				onSubmit={handleSubmit}
			>
				<div className="mx-auto p-10 grid gap-4 w-96">
					<Input
						inputType="email"
						label="Email"
						name="email"
						placeholder="Email"
					></Input>

					<Button
						color="primary"
						clickAction={'submit'}
					>
						Reset Password
					</Button>
				</div>
			</FormikForm>
		</div>
	);
};

export default Auth;
