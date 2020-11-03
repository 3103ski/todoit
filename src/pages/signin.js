import React from 'react';
import { Col } from 'reactstrap';
import { LayoutSection, Footer, FormContainer, SignInForm } from '../components';
import { HeaderContainer } from '../containers';

export default function SignUp() {
	return (
		<>
			<HeaderContainer></HeaderContainer>
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
