// React and Hooks
import React, { useState, useContext, useEffect } from 'react';
import { TodoContentContext } from '../contexts/todosContext';
import { UserContentContext } from '../contexts/userContext';
import { firebase } from '../lib/firebase.prod';
// UI components
import { LayoutSection, Footer, Header, Dashboard, List, NewTodoListForm } from '../components';
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
// local
import { useAuthListener } from '../hooks/';
import { fakeData } from '../constants/fakeData';

const DashboardPage = () => {
	const { user } = useAuthListener();
	const [state] = useContext(TodoContentContext);
	const [userContext] = useContext(UserContentContext);
	// local state
	const [view, setView] = useState('MainDash');
	const [activeList, setActiveList] = useState(null);
	const [modal, setModal] = useState(false);
	const toggleModal = () => setModal(!modal);

	const selectList = function (list) {
		setActiveList(list);
		setView('FullList');
		console.log(view);
	};

	useEffect(() => {
		const fetchData = async () => {
			const db = firebase.firestore();
			state.fetchTodoListsStart();
			db.collection('todolists')
				.where('ownerId', '==', `${user.uid}`)
				.onSnapshot(function (data) {
					console.log(data);
					const allLists = data.docs.map((doc) => {
						console.log(doc.data());
						return { ...doc.data(), id: doc.id };
					});
					state.fetchTodoListsSuccess(allLists);
				});
		};
		fetchData();
	}, []);
	const MainDash = function () {
		return (
			<>
				<Dashboard.Title>Welcome, {user ? user.displayName : null}</Dashboard.Title>
				<Dashboard.InnerContainer>
					<Dashboard.Column>
						<List.ListContainer listTitle='All Lists'>
							{state.todoLists && state.todoLists.length > 0 ? (
								state.todoLists.map((list) => {
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
			<Header resetTodosContext={() => state.resetTodosContext()} />
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

export default DashboardPage;
