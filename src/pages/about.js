// React
import React from 'react';

// Components
import { Button, Col } from 'reactstrap';
import { Feature, Footer, LayoutSection, ContactForm, FormContainer, Header } from '../components';

// Local / Static
import * as colors from '../constants/colors';

export default function AboutPage() {
	return (
		<>
			<Header />
			<LayoutSection>
				<Col md={6}>
					<Feature>
						<Feature.Title>ToDOIT Has History!</Feature.Title>
						<Feature.SubTitle>
							Proident aliqua dolor dolore reprehenderit qui aute consectetur ut sunt. Consequat magna aliqua dolor cupidatat pariatur elit qui nulla pariatur dolor non qui. Enim dolor
							enim eiusmod fugiat qui ullamco. Tempor in deserunt culpa deserunt culpa do enim proident ad do. Eu velit veniam eiusmod deserunt sunt. Sit ullamco fugiat do deserunt nulla
							ullamco ea officia proident nisi do dolore.
						</Feature.SubTitle>
					</Feature>
				</Col>
				<Col md={6}>
					<Feature>
						<img src='/assets/images/checklist.png' alt='checklist' />
					</Feature>
				</Col>
				<Col>
					<Feature>
						<Feature.SubTitle>So many are out there beign productive!</Feature.SubTitle>
						<Button>Sign Up</Button>
					</Feature>
				</Col>
			</LayoutSection>
			<LayoutSection fullWidth containerStyle={{ backgroundColor: colors.ligthPrimary }}>
				<Col md={6} className='mx-auto'>
					<FormContainer formTitle='CONTACT US'>
						<ContactForm></ContactForm>
					</FormContainer>
				</Col>
			</LayoutSection>
			<Footer />
		</>
	);
}
