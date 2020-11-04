import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// need to seed the database

// we need a config
const config = {
	apiKey: 'AIzaSyCGsWm_Hh9IfvC9S0SgNg0ynWfbOZrNVAo',
	authDomain: 'todoit-89a4c.firebaseapp.com',
	databaseURL: 'https://todoit-89a4c.firebaseio.com',
	projectId: 'todoit-89a4c',
	storageBucket: 'todoit-89a4c.appspot.com',
	messagingSenderId: '680179625716',
	appId: '1:680179625716:web:e269d7bb3f6d11b68f38a1',
};
const firebase = Firebase.initializeApp(config);

export { firebase };
