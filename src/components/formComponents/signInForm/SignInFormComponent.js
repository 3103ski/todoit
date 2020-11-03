import React, { Component } from 'react';
import { Button, Row, Col } from 'reactstrap';
import { Form } from 'react-redux-form';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { FormInput } from '../../index';

class SignInForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',

			touched: {
				username: false,
				password: false,
			},
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(values) {
		console.log(`Current state is: ${JSON.stringify(values)}`);
		alert(`Current state is: ${JSON.stringify(values)}`);
		this.props.resetSignInForm();
	}
	render() {
		return (
			<>
				<Form style={{ width: '100%' }} model='signUpForm' onSubmit={(values) => this.handleSubmit(values)}>
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
								SIGN IN
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
	resetSignUpForm: () => actions.reset('signInForm'),
};
export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
