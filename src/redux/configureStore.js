import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { ContactInitial } from './reducers/contactForm';

export const ConfigureStore = () => {
	const store = createStore(
		combineReducers({
			...createForms({
				contactForm: ContactInitial,
			}),
		}),
		applyMiddleware(thunk, logger)
	);
	return store;
};
