import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import App from './App';
import { FirebaseContext } from './context/firebase';
import { firebase } from './lib/firebase.prod';

ReactDOM.render(
	<FirebaseContext.Provider value={{ firebase }}>
		<App />
	</FirebaseContext.Provider>,
	document.getElementById('root')
);
