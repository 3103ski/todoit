import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import App from './App';
import { FirebaseContext } from './context/firebase';
import { firebase } from './lib/firebase.prod';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

ReactDOM.render(
	<FirebaseContext.Provider value={{ firebase }}>
		<Provider store={store}>
			<App />
		</Provider>
	</FirebaseContext.Provider>,
	document.getElementById('root')
);
