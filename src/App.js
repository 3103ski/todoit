// React
import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

// Firestore
import { useAuthListener } from './hooks';

// Pages
import { HomePage, AboutPage, SignInPage, SignUpPage, DashboardPage } from './pages';
import { ProtectedRoute, IsUserRedirect } from './util/redirects';

// Other
import * as ROUTES from './constants/routes';
import './App.css';

function App() {
	const { user } = useAuthListener();
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route exact path={ROUTES.HOME} component={HomePage} />
					<Route exact path={ROUTES.ABOUT} component={AboutPage} />

					<IsUserRedirect loggedInPath={ROUTES.DASHBOARD} user={user} path={ROUTES.SIGN_UP}>
						<SignUpPage />
					</IsUserRedirect>

					<IsUserRedirect loggedInPath={ROUTES.DASHBOARD} user={user} path={ROUTES.SIGN_IN}>
						<SignInPage />
					</IsUserRedirect>

					<ProtectedRoute user={user} path={ROUTES.DASHBOARD}>
						<DashboardPage />
					</ProtectedRoute>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
