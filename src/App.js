// React
import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
// Pages
import { HomePage, AboutPage, SignInPage, SignUpPage, DashboardPage } from './pages';

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
						<Route exact path={ROUTES.HOME} component={HomePage} />
						<Route exact path={ROUTES.ABOUT} component={AboutPage} />
						<Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
						<Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
						<Route exact path={ROUTES.DASHBOARD} component={DashboardPage} />
					</Switch>
				</Router>
			</Provider>
		</div>
	);
}

export default App;
