import React, { useState, createContext } from 'react';
import { firebase } from '../lib/firebase.prod';

const UserContentContext = createContext();
const UserContextProvider = (props) => {
	const [state, setState] = useState({
		isLoading: false,
		profileLoaded: false,
		isLoggedIn: false,
		user: null,
		updatingProfile: false,
		errorMsg: null,
		error: false,
		authInit: (em, pw) => authInit(em, pw),
		authSignOut: () => signOut(),
	});

	//____________________
	//  AUTHENTICATION
	//--------------------
	function authInit(email, password) {
		authStart();
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((res) => {
				const userProfile = {
					email: res.user.email,
					displayName: res.user.displayName,
					refreshToken: res.user.refreshToken,
					uid: res.user.uid,
				};
				authSuccess(userProfile);
				return console.log('user state!', state);
			})
			.catch((error) => {
				console.log('_*_*_*_*_*_*_!!ERROR!!_*_*_*_*_*_*', error);
				return authError(error);
			});
	}
	function authStart() {
		return setState({
			...state,
			isLoading: true,
		});
	}
	function authSuccess(user) {
		return setState({
			...state,
			user: { ...user },
			isLoading: false,
			isLoggedIn: true,
			profileLoaded: true,
		});
	}
	function authError(error) {
		return setState({
			...state,
			isLoading: false,
			error: true,
			errorMsg: error,
		});
	}

	function signOut() {
		firebase.auth().signOut();
		return setState({
			...state,
			isLoading: false,
			profileLoaded: false,
			isLoggedIn: false,
			user: null,
			updatingProfile: false,
			errorMsg: null,
			error: false,
		});
	}
	return <UserContentContext.Provider value={[state, setState]}>{props.children}</UserContentContext.Provider>;
};

export { UserContentContext, UserContextProvider };
