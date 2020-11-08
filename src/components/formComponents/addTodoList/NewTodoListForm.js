// React
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
// Components
import { Button, Row, Col } from 'reactstrap';
import { Form } from 'react-redux-form';
import { FormInput } from '../../index';
// Static
import * as ActionTypes from '../../../redux/actions';
// Utility
import { randomId } from '../../../util/utility';

class NewTodoListForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listName: '',
			listDescription: '',
			touched: {
				listName: false,
				listDescription: false,
			},
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(values) {
		console.log('PASSING THIS', values);
		const date = new Date();
		const newList = {
			listName: values.listName,
			listDescription: values.listDescription,
			listId: randomId(),
			ownerId: this.props.userId,
			dates: {
				createdOn: date,
				lastModifiedOn: date,
			},
		};
		this.props.resetNewTodoListForm();
		this.props.addTodoList(newList);
		this.props.toggleFormModal();
		this.props.listsInit(this.props.userId);
	}
	render() {
		return (
			<>
				<Form style={{ width: '100%' }} model='newTodoListForm' onSubmit={(values) => this.handleSubmit(values)}>
					<FormInput
						errMsgs={{
							required: 'Required',
						}}
						inputType='text'
						placeholder='List Name'
						name='listName'
						required
					/>
					<FormInput
						errMsgs={{
							maxLength: 'List description cannot exceed 200 characters',
						}}
						inputType='text'
						placeholder='List Description'
						name='listDescription'
						maxLength={200}
					/>

					<Row className='form-group'>
						<Col>
							<Button type='submit' color='primary'>
								Create List
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
	resetNewTodoListForm: () => actions.reset('newTodoListForm'),
	addTodoList: (list, userId) => ActionTypes.addTodoListInit(list, userId),
};
export default connect(mapStateToProps, mapDispatchToProps)(NewTodoListForm);
