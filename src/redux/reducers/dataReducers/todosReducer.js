import * as ActionTypes from '../../actions/actionTypes';
import { updateObject } from '../../../util/utility';

//----------------
// 	STATE
//----------------

const intitialState = {
	todoLists: [],
	isLoadingLists: false,
	hasLists: false,
	errorMsg: null,
};

const resetTodosReducer = (state, action) => {
	return updateObject(state, {
		todoLists: [],
		isLoadingLists: false,
		hasLists: false,
		errorMsg: null,
	});
};

//----------------
// 	Get
//----------------

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
		errorMsg: action.errorMsg,
	});
};

const getListsSuccess = (state, action) => {
	return updateObject(state, {
		isLoadingLists: false,
		hasLists: true,
		todoLists: action.lists,
	});
};

//----------------
// 	REDUCER
//----------------

const todosReducer = (state = intitialState, action) => {
	switch (action.type) {
		case ActionTypes.RESET_TODOS_REDUCER:
			return resetTodosReducer(state, action);
		case ActionTypes.GET_LISTS_START:
			return getListsStart(state, action);
		case ActionTypes.GET_LISTS_ERROR:
			return getListsError(state, action);
		case ActionTypes.GET_LISTS_SUCCESS:
			return getListsSuccess(state, action);
		default:
			return state;
	}
};

export default todosReducer;
