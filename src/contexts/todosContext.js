import React, { useState, createContext } from 'react';
import { firebase } from '../lib/firebase.prod';
import { updateObject, randomId } from '../util/utility';
const TodoContentContext = createContext();

function TodoContextProvider({ children }) {
	const [state, setState] = useState({
		todoLists: [],
		todos: [],
		listsLoaded: false,
		isLoadingList: false,
		isAddingList: false,
		hasError: false,
		errorMsg: null,
		fetchTodoListsStart: () => fetchListsStart(),
		fetchTodoListsSuccess: (listOfLists) => fetchListsSuccess(listOfLists),
		fetchTodoListsError: (error) => fetchListsError(error),
		addTodoListInit: (newList) => addTodoListInit(newList),
		// addTodoListStart: () => addTodoListStart(),
		// addTodoListError: (error) => addTodoListError(error),
		// addTodoListSuccess: (newList) => addTodoListSuccess(newList),
		resetTodosContext: () => resetContext(),
	});

	//____________________
	// TodoList Fetching
	//--------------------

	function fetchListsSuccess(listOfLists) {
		return setState(
			updateObject(state, {
				todoLists: listOfLists,
				isLoadingList: false,
				listsLoaded: true,
			})
		);
	}

	function fetchListsStart() {
		return setState(
			updateObject(state, {
				isLoadingList: true,
				listsLoaded: false,
				hasError: false,
				errorMsg: null,
			})
		);
	}

	function fetchListsError(error) {
		return setState(
			updateObject(state, {
				isLoadingList: false,
				listsLoaded: false,
				hasError: true,
				errorMsg: error,
			})
		);
	}

	//____________________
	// TodoList Adding
	//--------------------

	function addTodoListInit(newList) {
		addTodoListStart();
		firebase
			.firestore()
			.collection('todolists')
			.doc(randomId())
			.set(newList)
			.then(addTodoListSuccess(newList))
			.catch((err) => addTodoListError(err));
	}

	function addTodoListStart() {
		return setState(
			updateObject(state, {
				isAddingList: true,
			})
		);
	}

	function addTodoListError(error) {
		return setState(
			updateObject(state, {
				isAddingList: false,
				hasError: true,
				errorMsg: error,
			})
		);
	}

	function addTodoListSuccess(newList) {
		return setState(
			updateObject(state, {
				isAddingList: false,
				todoLists: updateObject(state.todoLists, newList),
			})
		);
	}

	// DEFAULT CONTEXT
	function resetContext() {
		return setState(
			updateObject(state, {
				todoLists: [],
				todos: [],
				listsLoaded: false,
				isLoadingList: false,
				isAddingList: false,
				hasError: false,
				errorMsg: null,
			})
		);
	}

	return <TodoContentContext.Provider value={[state, setState]}>{children}</TodoContentContext.Provider>;
}

export { TodoContentContext, TodoContextProvider };
