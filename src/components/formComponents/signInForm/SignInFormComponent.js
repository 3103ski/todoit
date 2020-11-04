import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
// import * as ROUTES from '../../../constants/routes';
import * as ActionTypes from '../../../redux/actions';
import { Button, Row, Col } from 'reactstrap';
import { Form } from 'react-redux-form';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { FormInput } from '../../index';

class SignInForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',

			touched: {
				email: false,
				password: false,
			},
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(values) {
		console.log('PASSING THIS', values);
		this.props.resetSignInForm();
		this.props.logInUserInit(values);
	}
	render() {
		return (
			<>
				<Form style={{ width: '100%' }} model='signInForm' onSubmit={(values) => this.handleSubmit(values)}>
					<FormInput
						errMsgs={{
							required: 'Required',
							validEmail: 'You must enter a valid email address',
						}}
						inputType='text'
						placeholder='Email'
						name='email'
						required
						isEmail
					/>
					<FormInput
						errMsgs={{
							required: 'You must create a password',
							minLength: 'Your password must be at least 6 characters',
							maxLength: 'Your password cannot be longer than 20 characters',
						}}
						inputType='text'
						placeholder='Password'
						name='password'
						required
						minLength={6}
						maxLength={20}
					/>

					<Row className='form-group'>
						<Col>
							<Button type='submit' color='primary'>
								SIGN IN
							</Button>
						</Col>
					</Row>
				</Form>
				{/* {this.props.userLoaded ? <Redirect to={ROUTES.DASHBOARD} /> : null} */}
			</>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		userLoaded: state.user.profileLoaded,
	};
};

const mapDispatchToProps = {
	resetSignInForm: () => actions.reset('signInForm'),
	logInUserInit: (email, password) => ActionTypes.logInUserInit(email, password),
};
export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
