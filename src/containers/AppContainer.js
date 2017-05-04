import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import App from '../components/App';
import LoginContainer from './LoginContainer';
import RegistrationContainer from './RegistrationContainer';
import DashboardContainer from './DashboardContainer';

class AppContainer extends Component {
	componentWillMount(){

	}

	render() {
		return (
			<App >
				<Route path="/login" component={LoginContainer} />
				<Route path="/registration" component={RegistrationContainer} />
				<Route path="/dashboard" component={DashboardContainer} />
			</App>
		);
	}
}


export default AppContainer;