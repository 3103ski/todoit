// React and Hooks
import React, { useState, useContext } from 'react';
// DB & Contexts
import { TodoContentContext } from '../contexts/todosContext';
// Components
import { LayoutSection, Footer, Header, Dashboard, List, NewTodoListForm } from '../components';
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
// Hooks
import { useAuthListener, fetchTodoLists } from '../hooks/';
// local / static
import { fakeData } from '../constants/fakeData';

//******************************************************* */
//******************************************************* */
const DashboardPage = () => {
	//______
	// Page Variables
	//------

	const { user } = useAuthListener();
	const [subView, setSubView] = useState('MainDash');
	fetchTodoLists('todolists', user.uid);

	// Contexts
	const [todoContext] = useContext(TodoContentContext);

	// TodoLists
	const [activeList, setActiveList] = useState(null);
	const [addTodoListModal, setAddTodoListModal] = useState(false);
	const toggleAddTodoListModal = () => setAddTodoListModal(!addTodoListModal);

	// Todos
	const [addTodoModal, setAddTodoModal] = useState(false);
	const toggleAddTodoModal = () => setAddTodoModal(!addTodoModal);

	//______
	// Functions to change sub view
	//------
	const selectList = function (list) {
		setActiveList(list);
		setSubView('FullList');
	};

	//______
	// Used as sub view in RenderDash component below
	//------
	const MainDash = function () {
		return (
			<>
				<Dashboard.Title>Welcome, {user ? user.displayName : null}</Dashboard.Title>
				<Dashboard.InnerContainer>
					<Dashboard.Column>
						<List.ListContainer listTitle='All Lists'>
							{todoContext.todoLists && todoContext.todoLists.length > 0 ? (
								todoContext.todoLists.map((list) => {
									console.log(list);
									return (
										<List.ListItem onClick={() => selectList(list)} key={list.listId} isListing>
											{list.listName}
										</List.ListItem>
									);
								})
							) : (
								<p style={{ margin: '20px 0' }}>You don't have any lists yet.</p>
							)}
							<Button onClick={toggleAddTodoListModal}>ADD TODO LIST</Button>
							<Modal isOpen={addTodoListModal} toggle={toggleAddTodoListModal}>
								<ModalHeader toggle={toggleAddTodoListModal}>Modal title</ModalHeader>
								<ModalBody>
									<NewTodoListForm toggleFormModal={toggleAddTodoListModal} userId={user ? user.uid : null}></NewTodoListForm>
								</ModalBody>
							</Modal>
						</List.ListContainer>
					</Dashboard.Column>
					<Dashboard.Column>
						<List.ListContainer listTitle='Today'>
							{fakeData.allTodoLists[1].todos.map((todo) => (
								<List.ListItem key={todo.id} todo={todo} offList isTodo complete={todo.isComplete}>
									{todo.name}
								</List.ListItem>
							))}
						</List.ListContainer>
					</Dashboard.Column>
				</Dashboard.InnerContainer>
			</>
		);
	};

	//______
	// Used as sub view in RenderDash component below
	//------
	const ListSelected = function (props) {
		console.log(activeList);
		return (
			<>
				<Dashboard.InnerContainer>
					<Dashboard.Title style={{ cursor: 'pointer' }} onClick={() => setSubView('MainDash')}>
						GoBack
					</Dashboard.Title>
					<List.ListContainer listTitle={activeList.listName}>
						{activeList.todos && activeList.todos.length > 0 ? (
							activeList.todos.map((todo) => <List.ListItem key={todo.todoId}>{todo.title}</List.ListItem>)
						) : (
							<p style={{ margin: '20px 0' }}>You don't have any todos yet.</p>
						)}
						<Button onClick={toggleAddTodoModal}>ADD TODO</Button>
						<Modal isOpen={addTodoModal} toggle={toggleAddTodoModal}>
							<ModalHeader toggle={toggleAddTodoModal}>Modal title</ModalHeader>
							<ModalBody>
								<NewTodoListForm toggleFormModal={toggleAddTodoModal} userId={user.uid}></NewTodoListForm>
							</ModalBody>
						</Modal>
					</List.ListContainer>
				</Dashboard.InnerContainer>
			</>
		);
	};

	//______
	// Renders appropriate sub view on dash for app state
	//------
	const RenderDash = function () {
		switch (subView) {
			case 'MainDash':
				return <MainDash />;
			case 'FullList':
				return <ListSelected />;
			default:
				return <MainDash />;
		}
	};

	return (
		<>
			<Header resetTodosContext={() => todoContext.resetTodosContext()} />
			<LayoutSection
				fullWidth
				rowStyle={{ width: '100%', margin: '0', padding: '0', alignItems: 'center', justifyContent: 'center' }}
				containerStyle={{ height: '80vh', display: 'flex', padding: '0' }}>
				<Dashboard>{RenderDash()}</Dashboard>
			</LayoutSection>
			<Footer footerStyle={{ height: '20vh' }} />
		</>
	);
};

export default DashboardPage;
