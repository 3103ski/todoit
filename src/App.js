import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Home, About, SignIn, SignUp } from './pages';
import * as ROUTES from './constants/routes';

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route exact path={ROUTES.HOME} component={Home} />
					<Route exact path={ROUTES.ABOUT} component={About} />
					<Route exact path={ROUTES.SIGN_IN} component={SignIn} />
					<Route exact path={ROUTES.SIGN_UP} component={SignUp} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
