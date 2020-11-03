// React
import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
// Pages
import { Home, About, SignIn, SignUp } from './pages';

// Other
import * as ROUTES from './constants/routes';
import './App.css';

function App() {
	const store = ConfigureStore();
	return (
		<div className='App'>
			<Provider store={store}>
				<Router>
					<Switch>
						<Route exact path={ROUTES.HOME} component={Home} />
						<Route exact path={ROUTES.ABOUT} component={About} />
						<Route exact path={ROUTES.SIGN_IN} component={SignIn} />
						<Route exact path={ROUTES.SIGN_UP} component={SignUp} />
					</Switch>
				</Router>
			</Provider>
		</div>
	);
}

export default App;
