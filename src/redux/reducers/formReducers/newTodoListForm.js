import * as ActionTypes from '../../actions/actionTypes';

export const NewTodoListInitial = {
	listName: '',
	listDescription: '',
};

export const AddTodoListState = (state = {}, action) => {
	switch (action.type) {
		case ActionTypes.ADD_TODO_LIST_INIT:
			return {
				...state,
			};

		default:
			return state;
	}
};
