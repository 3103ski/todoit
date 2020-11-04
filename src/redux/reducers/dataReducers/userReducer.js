import * as actionTypes from '../../actions/actionTypes';

import { updateObject } from '../../../util/utility';

const intitialState = {
	profile: {
		username: '',
		email: '',
		firstName: '',
		lastName: '',
	},
	id: '',
	updatingProfile: false,
	loadingProfile: false,
	profileLoaded: false,
	error: false,
	errorMsg: null,
};

const createUserSuccess = (state, action) => {
	const user = action.user;
	const newProfile = {
		username: user.username,
		email: user.email,
		firstName: user.firstName,
		lastName: user.lastName,
	};
	return updateObject(state, {
		loadingProfile: false,
		profileLoaded: true,
		id: user.uid,
		profile: newProfile,
		error: false,
		errorMsg: null,
	});
};

const createUserStart = (state, action) => {
	return updateObject(state, {
		loadingProfile: true,
		profileLoaded: false,
		error: false,
	});
};

const createUserError = (state, action) => {
	return updateObject(state, {
		loadingProfile: false,
		profileLoaded: false,
		error: true,
		errorMsg: action.errorMsg,
	});
};

const userReducer = (state = intitialState, action) => {
	switch (action.type) {
		case actionTypes.CREATE_USER_START:
			return createUserStart(state, action);
		case actionTypes.CREATE_USER_ERROR:
			return createUserError(state, action);
		case actionTypes.CREATE_USER_SUCCESS:
			return createUserSuccess(state, action);
		default:
			return state;
	}
};

export default userReducer;
