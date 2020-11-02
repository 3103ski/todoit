import React from 'react';
import { Feature } from '../components';
import { HeaderContainer } from '../containers';
import { Button } from 'reactstrap';

export default function Home() {
	return (
		<>
			<HeaderContainer>
				<Feature>
					<Feature.Title>Welcome To ToDoIt</Feature.Title>
					<Feature.SubTitle>Where things get done</Feature.SubTitle>
					<Button size='sm' color={'primary'}>
						SIGN UP
					</Button>
				</Feature>
			</HeaderContainer>
		</>
	);
}
