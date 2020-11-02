import React from 'react';
import { Feature } from '../components';
import { HeaderContainer } from '../containers';
// import { Button } from 'reactstrap';

export default function About() {
	return (
		<>
			<HeaderContainer>
				<Feature>
					<Feature.Title>Learn about ToDoIt</Feature.Title>
				</Feature>
			</HeaderContainer>
		</>
	);
}
