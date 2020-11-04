import React from 'react';
import * as ActionTypes from './actionTypes';
import * as ROUTES from '../../constants/routes';
import { Redirect } from 'react-router-dom';
import { firebase } from '../../lib/firebase.prod';

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
