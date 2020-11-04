import React from 'react';
import { Col } from 'reactstrap';
import { LayoutSection, Footer, FormContainer, SignInForm, Header } from '../components';

export default function SignUpPage() {
	return (
		<>
			<Header />
			<LayoutSection rowStyle={{ height: '100%', alignItems: 'center' }} containerStyle={{ height: '80vh' }}>
				<Col md={6} className='mx-auto'>
					<FormContainer formTitle='Login To Your Account'>
						<SignInForm></SignInForm>
					</FormContainer>
				</Col>
			</LayoutSection>
			<Footer footerStyle={{ height: '20vh' }} />
		</>
	);
}
