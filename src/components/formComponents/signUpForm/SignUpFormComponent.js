import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import * as ROUTES from '../../../constants/routes';
import { Button, Row, Col } from 'reactstrap';
import { Form } from 'react-redux-form';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import * as action from '../../../redux/actions';
import { FormInput } from '../../index';

class SignUpForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			username: '',
			password: '',
			email: '',
			touched: {
				firstName: false,
				lastName: false,
				username: false,
				password: false,
				email: false,
			},
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(values) {
		const newUser = {
			...values,
		};
		console.log(`This is the attempted user: `, newUser);
		this.props.resetSignUpForm();
		this.props.createNewAccount(newUser);
	}
	compon;

	render() {
		return (
			<>
				<Form style={{ width: '100%' }} model='signUpForm' onSubmit={(values) => this.handleSubmit(values)}>
					<FormInput
						errMsgs={{
							required: 'Required',
							minLength: 'First Name must be at least 2 characters',
							maxLength: 'First name must be less than 15 characters',
						}}
						inputType='text'
						placeholder='First Name'
						name='firstName'
						required
						minLength={2}
						maxLength={15}
					/>
					<FormInput
						errMsgs={{
							required: 'Required',
							minLength: 'Last name must be at least 2 characters',
							maxLength: 'Last name must be less than 20 characters',
						}}
						inputType='text'
						placeholder='Last Name'
						name='lastName'
						required
						minLength={2}
						maxLength={20}
					/>
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
							required: 'Username is required',
							minLength: 'Username must be at least 6 characters',
							maxLength: 'Username cannot be longer than 15 characters',
						}}
						inputType='text'
						placeholder='Username'
						name='username'
						required
						minLength={6}
						maxLength={15}
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
								Sign Up
							</Button>
						</Col>
					</Row>
				</Form>
				{this.props.userLoaded ? <Redirect to={ROUTES.DASHBOARD} /> : null}
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
	resetSignUpForm: () => actions.reset('signUpForm'),
	createNewAccount: (newUser) => action.createUserInit(newUser),
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
