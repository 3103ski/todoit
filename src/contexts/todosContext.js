import React, { useState, createContext } from 'react';

const TodoContentContext = createContext();

function TodoContextProvider({ children }) {
	const [state, setState] = useState({
		todoLists: [],
		listsLoaded: false,
		isLoading: false,
		todos: [],
		hasError: false,
		errorMsg: null,
		fetchTodoListsSuccess: (listOfLists) => fetchListsSuccess(listOfLists),
		fetchTodoListsError: (error) => fetchListsError(error),
		fetchTodoListsStart: () => fetchListsStart(),
		resetTodosContext: () => resetContext(),
	});

	//____________________
	// TodoList Fetching
	//--------------------

	function fetchListsSuccess(listOfLists) {
		return setState({
			...state,
			todoLists: listOfLists,
			isLoading: false,
			listsLoaded: true,
		});
	}

	function fetchListsStart() {
		return setState({
			...state,
			isLoading: true,
			listsLoaded: false,
			hasError: false,
			errorMsg: null,
		});
	}

	function fetchListsError(error) {
		return setState({
			...state,
			isLoading: false,
			listsLoaded: false,
			hasError: true,
			errorMsg: error,
		});
	}

	//____________________
	// TodoList Adding
	//--------------------

	// DEFAULT CONTEXT
	function resetContext() {
		return setState({
			...state,
			todoLists: [],
			listsLoaded: false,
			isLoading: false,
			todos: [],
			hasError: false,
			errorMsg: null,
		});
	}

	return <TodoContentContext.Provider value={[state, setState]}>{children}</TodoContentContext.Provider>;
}

export { TodoContentContext, TodoContextProvider };
