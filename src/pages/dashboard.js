import React from 'react';
import { LayoutSection, Footer, Header, Dashboard, List } from '../components';
import { fakeData } from '../constants/fakeData';

function DashboardPage() {
	return (
		<>
			<Header />
			<LayoutSection
				fullWidth
				rowStyle={{ width: '100%', margin: '0', padding: '0', alignItems: 'center', justifyContent: 'center' }}
				containerStyle={{ height: '80vh', display: 'flex', padding: '0' }}>
				<Dashboard>
					<Dashboard.Title>Welcome, {fakeData.user}</Dashboard.Title>
					<Dashboard.InnerContainer>
						<Dashboard.Column>
							<List.ListContainer listTitle='All Lists'>
								{fakeData.allTodoLists.map((list) => (
									<List.ListItem key={list.id} isListing>
										{list.name}
									</List.ListItem>
								))}
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
				</Dashboard>
			</LayoutSection>
			<Footer footerStyle={{ height: '20vh' }} />
		</>
	);
}

export default DashboardPage;
