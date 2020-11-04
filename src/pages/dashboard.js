import React from 'react';
import { LayoutSection, Footer, Header, Dashboard, List } from '../components';

const fakeTodoListOne = {
	id: 50,
	name: 'fake list one',
	owner: 'user name',
	createdOn: `${new Date().getMonth} - ${new Date().getDate} - ${new Date().getFullYear}`,
	todos: [
		{ isComplete: false, name: 'do something', list: 'fake list one', id: 1 },
		{ isComplete: false, name: 'do something again', list: 'fake list one', id: 2 },
		{ isComplete: true, name: 'do something for the third time', list: 'fake list one', id: 3 },
		{ isComplete: false, name: 'do something tomorrow instead', list: 'fake list one', id: 4 },
	],
};
const fakeTodoListTwo = {
	id: 51,
	name: 'fake list two',
	owner: 'user name',
	createdOn: `${new Date().getMonth} - ${new Date().getDate} - ${new Date().getFullYear}`,
	todos: [
		{ isComplete: true, name: 'SLAMMERS', list: 'fake list two', id: 5 },
		{ isComplete: false, name: 'do something again', list: 'fake list two', id: 6 },
		{ isComplete: true, name: 'do something for the third time', list: 'fake list two', id: 7 },
		{ isComplete: false, name: 'do something tomorrow instead', list: 'fake list two', id: 8 },
	],
};

const listOfLists = [fakeTodoListOne, fakeTodoListTwo];
function DashboardPage() {
	return (
		<>
			<Header />
			<LayoutSection
				fullWidth
				rowStyle={{ width: '100%', margin: '0', padding: '0', alignItems: 'center', justifyContent: 'center' }}
				containerStyle={{ height: '80vh', display: 'flex', padding: '0' }}>
				<Dashboard>
					<Dashboard.Title>Welcome, Mr. Shmoe</Dashboard.Title>
					<Dashboard.InnerContainer>
						<Dashboard.Column>
							<List.ListContainer listTitle='All Lists'>
								{listOfLists.map((list) => (
									<List.ListItem key={list.id} isListing>
										{list.name}
									</List.ListItem>
								))}
							</List.ListContainer>
						</Dashboard.Column>
						<Dashboard.Column>
							<List.ListContainer listTitle='Today'>
								{fakeTodoListOne.todos.map((todo) => (
									<List.ListItem key={todo.id} todo={todo} offList isTodo complete={todo.isComplete}>
										{todo.name}
									</List.ListItem>
								))}
							</List.ListContainer>
						</Dashboard.Column>
					</Dashboard.InnerContainer>
				</Dashboard>
			</LayoutSection>
			<Footer footerStyle={{ height: '20vh' }} />
		</>
	);
}

export default DashboardPage;
