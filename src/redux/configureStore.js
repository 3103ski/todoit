// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';

// Form reducers for initial states
import { ContactInitial, InitialSignUp, InitialSignIn, NewTodoListInitial } from './reducers';

// Middleware
import thunk from 'redux-thunk';
// import logger from 'redux-logger';

export const ConfigureStoreForForms = () => {
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
