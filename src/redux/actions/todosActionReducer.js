import * as ActionTypes from './actionTypes';
import { firebase } from '../../lib/firebase.prod';
import { randomId } from '../../util/utility';

//_________________
//	GET LISTS
//-----------------
export const getListsStart = () => {
	return {
		type: ActionTypes.GET_LISTS_START,
	};
};

export const getListsError = (error) => {
	return {
		type: ActionTypes.GET_LISTS_ERROR,
		errorMsg: error,
	};
};

export const getListsSuccess = (lists) => {
	return {
		type: ActionTypes.GET_LISTS_SUCCESS,
		lists: lists,
	};
};

export const getListsInit = (userId) => {
	return (dispatch) => {
		dispatch(getListsStart());
		firebase
			.firestore()
			.collection('todolists')
			.where('ownerId', '==', `${userId}`)
			.get()
			.then((qs) => {
				let collectionOfTodoLists = [];
				qs.forEach((doc) => {
					let todoList = {
						...doc.data(),
					};
					collectionOfTodoLists.push(todoList);
				});
				dispatch(getListsSuccess(collectionOfTodoLists));
			})
			.catch((err) => console.log('****ERRRRR', err));
	};
};

//_________________
//	ADD TODO LIST
//-----------------

export const addTodoListStart = () => {
	return {
		type: ActionTypes.ADD_TODO_LIST_START,
	};
};

export const addTodoListSuccess = (todoList) => {
	return {
		type: ActionTypes.ADD_TODO_LIST_SUCCESS,
		todoList: todoList,
	};
};

export const addTodoListError = (error) => {
	return {
		type: ActionTypes.ADD_TODO_LIST_ERROR,
		errorMsg: error,
	};
};

export const addTodoListInit = (list) => {
	const newList = {
		listId: randomId(),
		...list,
	};
	return (dispatch) => {
		dispatch(addTodoListStart());
		firebase
			.firestore()
			.collection('todolists')
			.doc(newList.listId)
			.set(newList)
			.then(() => dispatch(addTodoListSuccess(newList)))
			.catch((err) => dispatch(addTodoListError(err)));
	};
};

//_________________
//	RESET TODOS
//-----------------

export const resetTodosReducer = () => {
	return {
		type: ActionTypes.RESET_TODOS_REDUCER,
	};
};
