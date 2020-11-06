// React and redux
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
// UI components
import { LayoutSection, Footer, Header, Dashboard, List, NewTodoListForm } from '../components';
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
// local
import { useAuthListener } from '../hooks/';
import { fakeData } from '../constants/fakeData';

const DashboardPage = (props) => {
	const [todoLists, setTodoLists] = useState(props.app.todoLists);
	const [haveLists, toggleHaveLists] = useState(false);

	const [view, setView] = useState('MainDash');
	const [activeList, setActiveList] = useState(null);

	const [modal, setModal] = useState(false);
	const toggleModal = () => setModal(!modal);

	const { user } = useAuthListener();

	const selectList = function (list) {
		setActiveList(list);
		setView('FullList');
		console.log(view);
	};

	useState(() => {
		if (!haveLists && user && user.uid) {
			console.log('*+*+*+*+*+* DASHBOARD IS GETTINGS LISTS *+*+*+*+*+*');
			props.todoListsInit(user.uid);
		}
		toggleHaveLists(!haveLists);
		setTodoLists(props.app.todoLists);
	}, [props.app.todoLists, user]);

	const MainDash = function () {
		return (
			<>
				<Dashboard.Title>Welcome, {user ? user.displayName : null}</Dashboard.Title>
				<Dashboard.InnerContainer>
					<Dashboard.Column>
						<List.ListContainer listTitle='All Lists'>
							{todoLists.length > 0 ? (
								todoLists.map((list) => (
									<List.ListItem onClick={() => selectList(list)} key={list.listId} isListing>
										{list.listName}
									</List.ListItem>
								))
							) : (
								<p style={{ margin: '20px 0' }}>You don't have any lists yet.</p>
							)}
							<Button onClick={toggleModal}>ADD TODO LIST</Button>
							<Modal isOpen={modal} toggle={toggleModal}>
								<ModalHeader toggle={toggleModal}>Modal title</ModalHeader>
								<ModalBody>
									<NewTodoListForm toggleFormModal={toggleModal} userId={user ? user.uid : null}></NewTodoListForm>
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

	const ListSelected = function (props) {
		console.log(activeList);
		return (
			<>
				<Dashboard.InnerContainer>
					<Dashboard.Title style={{ cursor: 'pointer' }} onClick={() => setView('MainDash')}>
						GoBack
					</Dashboard.Title>
					<List.ListContainer listTitle={activeList.listName}>
						{activeList.todos && activeList.todos.length > 0 ? (
							activeList.todos.map((todo) => <List.ListItem key={todo.todoId}>{todo.title}</List.ListItem>)
						) : (
							<p style={{ margin: '20px 0' }}>You don't have any todos yet.</p>
						)}
						<Button onClick={toggleModal}>ADD TODO</Button>
						<Modal isOpen={modal} toggle={toggleModal}>
							<ModalHeader toggle={toggleModal}>Modal title</ModalHeader>
							<ModalBody>
								<NewTodoListForm toggleFormModal={toggleModal} userId={user.uid}></NewTodoListForm>
							</ModalBody>
						</Modal>
					</List.ListContainer>
				</Dashboard.InnerContainer>
			</>
		);
	};
	const renderDash = function () {
		switch (view) {
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
			<Header />
			<LayoutSection
				fullWidth
				rowStyle={{ width: '100%', margin: '0', padding: '0', alignItems: 'center', justifyContent: 'center' }}
				containerStyle={{ height: '80vh', display: 'flex', padding: '0' }}>
				<Dashboard>{renderDash()}</Dashboard>
			</LayoutSection>
			<Footer footerStyle={{ height: '20vh' }} />
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		app: state.app,
	};
};

const mapDispatchToProps = {
	todoListsInit: (userId) => actions.getListsInit(userId),
	addTodoList: (list) => actions.addTodoListInit(list),
	resetTodoReducer: () => actions.resetTodosReducer(),
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
