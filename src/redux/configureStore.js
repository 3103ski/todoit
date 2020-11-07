import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import { ContactInitial, InitialSignUp, InitialSignIn, NewTodoListInitial } from './reducers';

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
		}),
		applyMiddleware(thunk)
	);
	return store;
};
