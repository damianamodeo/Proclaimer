import { auth } from '@SERVICES/firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

type AuthType = {
	children?: any;
};

const LogOut = ({ children }: AuthType) => {
	const [currentUser, setCurrentUser] = useState<any>('Logged Out');

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
		});
		return unsubscribe;
	}, []);

	return <div className="text-center">{currentUser && currentUser.email} </div>;
};

export default LogOut;
