import * as ActionTypes from '../../actions/actionTypes';
import { updateObject } from '../../../util/utility';

//----------------
// 	STATE
//----------------

const intitialState = {
	profile: {
		username: '',
		email: '',
		firstName: '',
		lastName: '',
	},
	id: '',
	updatingProfile: false,
	isLoading: false,
	profileLoaded: false,
	isLoggedIn: false,
	error: false,
	errorMsg: null,
};

//----------------
// 	CREATE
//----------------

const createUserSuccess = (state, action) => {
	const user = action.user;
	const newProfile = {
		username: user.username,
		email: user.email,
		firstName: user.firstName,
		lastName: user.lastName,
	};
	return updateObject(state, {
		isLoading: false,
		profileLoaded: true,
		isLoggedIn: true,
		id: user.uid,
		profile: newProfile,
		error: false,
		errorMsg: null,
	});
};

const createUserStart = (state, action) => {
	return updateObject(state, {
		isLoading: true,
		profileLoaded: false,
		error: false,
		isLoggedIn: false,
	});
};

const createUserError = (state, action) => {
	return updateObject(state, {
		isLoading: false,
		profileLoaded: false,
		error: true,
		errorMsg: action.errorMsg,
		isLoggedIn: false,
	});
};

//----------------
// 	LOGIN
//----------------

const logInUserStart = (state, action) => {
	return updateObject(state, {
		isLoading: true,
		profileLoaded: false,
		error: false,
		errorMsg: null,
		isLoggedIn: false,
	});
};

const logInUserSuccess = (state, action) => {
	const user = action.user;
	const newProfile = {
		username: user.username,
		email: user.email,
		firstName: user.firstName,
		isLoggedIn: true,
		lastName: user.lastName,
	};
	return updateObject(state, {
		isLoading: false,
		profileLoaded: true,
		id: user.uid,
		profile: newProfile,
		error: false,
		isLoggedIn: true,
		errorMsg: null,
	});
};

const logInUserError = (state, action) => {
	return updateObject(state, {
		isLoading: false,
		profileLoaded: false,
		error: true,
		errorMsg: action.errorMsg,
		isLoggedIn: false,
	});
};

//----------------
// 	REDUCER
//----------------

const userReducer = (state = intitialState, action) => {
	switch (action.type) {
		case ActionTypes.CREATE_USER_START:
			return createUserStart(state, action);
		case ActionTypes.CREATE_USER_ERROR:
			return createUserError(state, action);
		case ActionTypes.CREATE_USER_SUCCESS:
			return createUserSuccess(state, action);
		case ActionTypes.LOGIN_USER_START:
			return logInUserStart(state, action);
		case ActionTypes.LOGIN_USER_SUCCESS:
			return logInUserSuccess(state, action);
		case ActionTypes.LOGIN_USER_ERROR:
			return logInUserError(state, action);
		default:
			return state;
	}
};

export default userReducer;
