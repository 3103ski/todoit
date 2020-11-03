import React, { Component } from 'react';
import { Button, Row, Label, Col } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { required, maxLength, minLength, isNumber, validEmail } from '../../constants/validators';

class ContactForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			phoneNum: '',
			email: '',
			agree: false,
			contactType: 'By Phone',
			feedback: '',
			touched: {
				firstName: false,
				lastName: false,
				phoneNum: false,
				email: false,
			},
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(values) {
		console.log(`Current state is: ${JSON.stringify(values)}`);
		alert(`Current state is: ${JSON.stringify(values)}`);
		this.props.resetContactForm();
	}
	render() {
		return (
			<>
				<Form style={{ width: '100%' }} model='contactForm' onSubmit={(values) => this.handleSubmit(values)}>
					<Row className='form-group'>
						<Label htmlFor='firstName' className='d-none'>
							First Name
						</Label>
						<Col>
							<Control.text
								validators={{ required, minLength: minLength(2), maxLength: maxLength(15) }}
								model='.firstName'
								id='firstName'
								name='firstName'
								placeholder='First Name'
								className='form-control'
							/>
							<Errors
								className='text-danger'
								model='.firstName'
								show='touched'
								component='div'
								messages={{
									required: 'Required',
									minLength: 'Must be at least 2 characters',
									maxLength: 'Must be 15 characters or less',
								}}
							/>
						</Col>
					</Row>
					<Row className='form-group'>
						<Label htmlFor='lastName' className='d-none'>
							Last Name
						</Label>
						<Col>
							<Control.text
								validators={{ required, minLength: minLength(2), maxLength: maxLength(15) }}
								model='.lastName'
								id='lastName'
								name='lastName'
								placeholder='Last Name'
								className='form-control'
							/>
							<Errors
								className='text-danger'
								model='.lastName'
								show='touched'
								component='div'
								messages={{
									required: 'Required',
									minLength: 'Must be at least 2 characters',
									maxLength: 'Must be 15 characters or less',
								}}
							/>
						</Col>
					</Row>
					<Row className='form-group'>
						<Label htmlFor='phoneNum' className='d-none'>
							Phone
						</Label>
						<Col>
							<Control.text
								validators={{ required, minLength: minLength(10), maxLength: maxLength(15), isNumber }}
								model='.phoneNum'
								id='phoneNum'
								name='phoneNum'
								placeholder='Phone number'
								className='form-control'
							/>
							<Errors
								className='text-danger'
								model='.phoneNum'
								show='touched'
								component='div'
								messages={{
									required: 'Required',
									minLength: 'Phone number must have at least 10 characters',
									maxLength: "Phone number can't be more than 15 digits",
									isNumber: 'Phone number can only be numeric values',
								}}
							/>
						</Col>
					</Row>
					<Row className='form-group'>
						<Label htmlFor='email' className='d-none'>
							Email
						</Label>
						<Col>
							<Control.text validators={{ required, validEmail }} model='.email' id='email' name='email' placeholder='Email' className='form-control' />
							<Errors
								className='text-danger'
								show='touched'
								model='.email'
								component='div'
								messages={{
									required: 'Required',
									validEmail: 'Must enter a valid email address',
								}}
							/>
						</Col>
					</Row>
					<Row className='form-group'>
						<Col md={{ size: 6, offset: 0 }}>
							<div className='form-check'>
								<Label check>
									<Control.checkbox model='.agree' name='agree' className='form-check-input' /> <strong>May we contact you?</strong>
								</Label>
							</div>
						</Col>
						<Col>
							<Control.select model='.contactType' name='contactType' className='form-control'>
								<option>By Phone</option>
								<option>By Email</option>
							</Control.select>
						</Col>
					</Row>
					<Row className='form-group'>
						<Label htmlFor='feedback' className='d-none'>
							Your Feedback
						</Label>
						<Col>
							<Control.textarea model='.feedback' id='feedback' name='feedback' rows='12' className='form-control' />
						</Col>
					</Row>
					<Row className='form-group'>
						<Col>
							<Button type='submit' color='primary'>
								Send Feedback
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
	resetContactForm: () => actions.reset('contactForm'),
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
