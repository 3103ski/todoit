// React
import React, { useContext } from 'react';
import { UserContentContext } from '../contexts/userContext';

// Components
import { Col } from 'reactstrap';
import { FormContainer, LayoutSection, Footer, SignUpForm, Header } from '../components';

export default function SignUpPage() {
	const [userContext] = useContext(UserContentContext);
	return (
		<>
			<Header />
			<LayoutSection rowStyle={{ height: '100%', alignItems: 'center' }} containerStyle={{ height: '80vh' }}>
				<Col md={6} className='mx-auto'>
					<FormContainer formTitle='Sign Up Now!'>
						<SignUpForm signUpInit={(newUser) => userContext.signUpInit(newUser)}></SignUpForm>
					</FormContainer>
				</Col>
			</LayoutSection>
			<Footer footerStyle={{ height: '20vh' }} />
		</>
	);
}
