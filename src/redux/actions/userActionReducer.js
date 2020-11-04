import * as ActionTypes from './actionTypes';
import { firebase } from '../../lib/firebase.prod';

//-----------------------------------
// 		Create User
//___________________________________

export const createUserStart = () => {
	return {
		type: ActionTypes.CREATE_USER_START,
	};
};

export const createUserSuccess = (user) => {
	return {
		type: ActionTypes.CREATE_USER_SUCCESS,
		user: user,
	};
};

export const createUserError = (error) => {
	return {
		type: ActionTypes.CREATE_USER_ERROR,
		errorMsg: error,
	};
};

export const createUserInit = ({ firstName, lastName, username, password, email }) => {
	return (dispatch) => {
		dispatch(createUserStart());
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((result) =>
				result.user.updateProfile({ displayName: firstName, lastName: lastName, username: username }).then(() => {
					console.log(result.user);
					dispatch(createUserSuccess(result));
				})
			)
			.catch((error) => {
				alert(error.message);
			});
	};
};

//-----------------------------------
// 		Authenticate User
//___________________________________

export const logInUserStart = () => {
	return { type: ActionTypes.LOGIN_USER_START };
};

export const logInUserSuccess = (user) => {
	return {
		type: ActionTypes.LOGIN_USER_SUCCESS,
		user: user,
	};
};

export const loginUserError = (error) => {
	return {
		type: ActionTypes.LOGIN_USER_ERROR,
		error: error,
	};
};

export const logInUserInit = ({ email, password }) => {
	return (dispatch) => {
		dispatch(logInUserStart());
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((result) => {
				dispatch(logInUserSuccess(result.user));
			})
			.catch((error) => {
				dispatch(loginUserError(error));
			});
	};
};
