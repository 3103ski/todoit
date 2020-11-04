import React, { Component } from 'react';
import { Button, Row, Col } from 'reactstrap';
import { Form } from 'react-redux-form';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
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
		console.log(`This is the state: ${this.state}`);
		console.log(`Current state is: ${JSON.stringify(values)}`);
		alert(`Current state is: ${JSON.stringify(values)}`);
		this.props.resetSignUpForm();
	}

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
			</>
		);
	}
}
const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = {
	resetSignUpForm: () => actions.reset('signUpForm'),
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
