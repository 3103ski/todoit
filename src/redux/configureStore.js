import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { ContactInitial, InitialSignUp, InitialSignIn, NewTodoListInitial, appReducer } from './reducers';

export const ConfigureStore = () => {
	const store = createStore(
		combineReducers({
			...createForms({
				contactForm: ContactInitial,
			}),
			...createForms({
				signUpForm: InitialSignUp,
			}),
			...createForms({
				signInForm: InitialSignIn,
			}),
			...createForms({
				newTodoListForm: NewTodoListInitial,
			}),
			// user: userReducer,
			// todos: todosReducer,
			app: appReducer,
		}),
		applyMiddleware(thunk, logger)
	);
	return store;
};
