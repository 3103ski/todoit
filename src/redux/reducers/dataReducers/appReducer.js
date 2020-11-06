import * as ActionTypes from '../../actions/actionTypes';
import { updateObject } from '../../../util/utility';

//----------------
// 	STATE
//----------------

const intitialState = {
	// todos
	todoLists: [],
	isLoadingLists: false,
	hasLists: false,
	errorMsgTodos: null,

	// user
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
	errorMsgUser: null,
};

//************************** */
// 	TODOS
//************************** */

// get todo lists
const getListsStart = (state, action) => {
	return updateObject(state, {
		isLoadingLists: true,
		hasLists: false,
	});
};

const getListsError = (state, action) => {
	return updateObject(state, {
		isLoadingLists: false,
		hasLists: false,
		errorMsgTodos: action.errorMsg,
	});
};

const getListsSuccess = (state, action) => {
	return updateObject(state, {
		isLoadingLists: false,
		hasLists: true,
		todoLists: action.lists,
	});
};

// resets app state related to todos
const resetTodosReducer = (state, action) => {
	console.log('*+*+*+*+*+*+*+* resetTodos - appReducer.js +*+*+*+*+*+*+*+*+*');
	return updateObject(state, {
		todoLists: [],
		isLoadingLists: false,
		hasLists: false,
		errorMsgTodos: null,
	});
};

//************************** */
// 	USER / AUTH
//************************** */

// create user
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
		errorMsgUser: null,
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
		errorMsgUser: action.errorMsg,
		isLoggedIn: false,
	});
};

// authentication
const logInUserStart = (state, action) => {
	return updateObject(state, {
		isLoading: true,
		profileLoaded: false,
		error: false,
		errorMsgUser: null,
		isLoggedIn: false,
	});
};

const logInUserSuccess = (state, action) => {
	const user = action.user;
	const newProfile = {
		username: user.username,
		email: user.email,
		firstName: user.displayName,
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
		errorMsgUser: null,
	});
};

const logInUserError = (state, action) => {
	return updateObject(state, {
		isLoading: false,
		profileLoaded: false,
		error: true,
		errorMsgUser: action.errorMsg,
		isLoggedIn: false,
	});
};

// reset app user on logout
const logoutUser = (state, action) => {
	return (
		state,
		updateObject({
			// todos
			todoLists: [],
			isLoadingLists: false,
			hasLists: false,
			errorMsgTodos: null,
			// user
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
			errorMsgUser: null,
		})
	);
};

//----------------
// 	REDUCER
//----------------

const todosReducer = (state = intitialState, action) => {
	switch (action.type) {
		// todos
		case ActionTypes.RESET_TODOS_REDUCER:
			return resetTodosReducer(state, action);
		case ActionTypes.GET_LISTS_START:
			return getListsStart(state, action);
		case ActionTypes.GET_LISTS_ERROR:
			return getListsError(state, action);
		case ActionTypes.GET_LISTS_SUCCESS:
			return getListsSuccess(state, action);
		// user
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
		case ActionTypes.LOGOUT_USER:
			return logoutUser(state, action);
		default:
			return state;
	}
};

export default todosReducer;
