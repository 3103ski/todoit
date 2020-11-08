import React, { useState, createContext } from 'react';
import { updateObject } from '../util/utility';
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
		hasError: false,
		signUpInit: (newUser) => signUpInit(newUser),
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
				return authError(error);
			});
	}
	function authStart() {
		return setState(
			updateObject(state, {
				isLoading: true,
			})
		);
	}
	function authSuccess(user) {
		return setState(
			updateObject(state, {
				user: { ...user },
				isLoading: false,
				isLoggedIn: true,
				profileLoaded: true,
			})
		);
	}
	function authError(error) {
		return setState(
			updateObject(state, {
				isLoading: false,
				hasError: true,
				errorMsg: error,
			})
		);
	}

	function signOut() {
		firebase.auth().signOut();
		return setState(
			updateObject(state, {
				isLoading: false,
				profileLoaded: false,
				isLoggedIn: false,
				user: null,
				updatingProfile: false,
				errorMsg: null,
				hasError: false,
			})
		);
	}

	//____________________
	//  NEW USER
	//--------------------
	function signUpInit(newUser) {
		signUpStart();
		firebase
			.auth()
			.createUserWithEmailAndPassword(newUser.email, newUser.password)
			.then((result) =>
				result.user.updateProfile({ displayName: newUser.firstName, lastName: newUser.lastName, username: newUser.username }).then(() => {
					signUpSuccess(newUser);
				})
			)
			.catch((error) => {
				signUpError(error);
			});
	}

	function signUpStart() {
		return setState(
			updateObject(state, {
				isLoading: true,
			})
		);
	}

	function signUpError(error) {
		return setState(
			updateObject(state, {
				isLoading: false,
				hasError: true,
				errorMsg: error,
			})
		);
	}

	function signUpSuccess(newUser) {
		return setState(
			updateObject(state, {
				isLoading: false,
				profileLoaded: true,
				isLoggedIn: true,
				user: newUser,
			})
		);
	}

	return <UserContentContext.Provider value={[state, setState]}>{props.children}</UserContentContext.Provider>;
};

export { UserContentContext, UserContextProvider };
