import React from 'react';
import { Col } from 'reactstrap';
import { FormContainer, LayoutSection, Footer, SignUpForm, Header } from '../components';

export default function SignUp() {
	return (
		<>
			<Header />
			<LayoutSection rowStyle={{ height: '100%', alignItems: 'center' }} containerStyle={{ height: '80vh' }}>
				<Col md={6} className='mx-auto'>
					<FormContainer formTitle='Sign Up Now!'>
						<SignUpForm></SignUpForm>
					</FormContainer>
				</Col>
			</LayoutSection>
			<Footer footerStyle={{ height: '20vh' }} />
		</>
	);
}
