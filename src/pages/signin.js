// React
import React, { useContext } from 'react';

// Components
import { Col } from 'reactstrap';
import { LayoutSection, Footer, FormContainer, SignInForm, Header } from '../components';

// Contexts
import { UserContentContext } from '../contexts/userContext';

export default function SignInPage() {
	const [userContext] = useContext(UserContentContext);

	return (
		<>
			<Header />
			<LayoutSection rowStyle={{ height: '100%', alignItems: 'center' }} containerStyle={{ height: '80vh' }}>
				<Col md={6} className='mx-auto'>
					<FormContainer formTitle='Login To Your Account'>
						<SignInForm authInit={(un, pw) => userContext.authInit(un, pw)}></SignInForm>
					</FormContainer>
				</Col>
			</LayoutSection>
			<Footer footerStyle={{ height: '20vh' }} />
		</>
	);
}
