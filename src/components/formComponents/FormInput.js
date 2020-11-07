import React from 'react';
import { Row, Label, Col } from 'reactstrap';
import { Control, Errors } from 'react-redux-form';
import { required, maxLength, minLength, validEmail, isNumber } from '../../constants/validators';

export default function FormInput({ children, ...props }) {
	function reset(e) {
		console.log(e.target.value);
	}
	const newInput = () => {
		let validators = {};
		if (props.maxLength) {
			validators = { ...validators, maxLength: maxLength(props.maxLength) };
		}
		if (props.minLength) {
			validators = { ...validators, minLength: minLength(props.minLength) };
		}
		if (props.required) {
			validators = { ...validators, required };
		}
		if (props.isEmail) {
			validators = { ...validators, validEmail };
		}
		if (props.isNumber) {
			validators = { ...validators, isNumber };
		}
		switch (props.inputType) {
			case 'text':
				return (
					<Control.text
						onSubmit={() => reset()}
						onChange={props.onChange}
						validators={validators}
						model={`.${props.name}`}
						id={props.name}
						name={props.name}
						placeholder={props.placeholder}
						className='form-control'
					/>
				);
			default:
				return <p>Be sure to include and inputType such as text or select</p>;
		}
	};
	return (
		<Row className='form-group'>
			<Label htmlFor={props.name} className={`${!props.showLabel ? 'd-none' : ''}`} md={!props.showLabel ? null : 2}>
				{props.placeholder}
			</Label>
			<Col md={!props.showLabel ? null : 10}>
				{newInput()}
				<Errors className='text-danger' model={`.${props.name}`} show='touched' component='div' messages={props.errMsgs} />
			</Col>
		</Row>
	);
}
