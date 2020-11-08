// React
import React from 'react';

// Components
import { Feature, LayoutSection, Footer, ContactForm, Header } from '../components';
import { Button, Col } from 'reactstrap';

// Static
import * as colors from '../constants/colors';

export default function HomePage() {
	return (
		<>
			<Header>
				<LayoutSection rowStyle={{ padding: '200px 0' }}>
					<Col>
						<Feature>
							<Feature.Title>Welcome To ToDoIt</Feature.Title>
							<Feature.SubTitle>Where things get done</Feature.SubTitle>
							<Button size='sm' color={'primary'}>
								SIGN UP
							</Button>
						</Feature>
					</Col>
				</LayoutSection>
			</Header>
			<LayoutSection>
				<Col md={6}>
					<Feature>
						<Feature.Title>Get Work Done!</Feature.Title>
						<Feature.SubTitle>We belive so many things about todos that we took time to make this basic app even thought it won't make popular. We Love Todos!</Feature.SubTitle>
					</Feature>
				</Col>
				<Col md={6}>
					<Feature>
						<img width={200} src='/assets/images/checklist.png' alt='logo' />
					</Feature>
				</Col>
			</LayoutSection>
			<LayoutSection fullWidth containerStyle={{ backgroundColor: colors.ligthPrimary }}>
				<Col>
					<Feature>
						<Feature.Title>JUMP ON BOARD!</Feature.Title>
						<Feature.SubTitle>
							You should really consider signing up for
							<br /> this app just because because becuase
						</Feature.SubTitle>
						<Button>SIGN UP!</Button>
					</Feature>
				</Col>
			</LayoutSection>
			<LayoutSection>
				<Col className='text-center' md={12}>
					<Feature.Title>GOT QUESTIONS?</Feature.Title>
					<Feature.SubTitle>Reach out and let a team member know.</Feature.SubTitle>
				</Col>
				<Col md={6}>
					<Feature>
						<img width={300} className='pt-5' src='/assets/images/confused.png' alt='logo' />
					</Feature>
				</Col>
				<Col md={6}>
					<Feature>
						<ContactForm></ContactForm>
					</Feature>
				</Col>
			</LayoutSection>
			<Footer />
		</>
	);
}
