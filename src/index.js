// React
import React from 'react';
import ReactDOM from 'react-dom';

// Global Styling
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

// Components
import App from './App';

// Provider Imports
import { Provider } from 'react-redux';
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './contexts/firebase';
import { ConfigureStoreForForms } from './redux/configureStore';
import { UserContextProvider } from './contexts/userContext';
import { TodoContextProvider } from './contexts/todosContext';

// Using Redux Store to manage forms
const reduxFormsStore = ConfigureStoreForForms();

ReactDOM.render(
	<FirebaseContext.Provider value={{ firebase }}>
		<Provider store={reduxFormsStore}>
			<UserContextProvider>
				<TodoContextProvider>
					<App />
				</TodoContextProvider>
			</UserContextProvider>
		</Provider>
	</FirebaseContext.Provider>,
	document.getElementById('root')
);
