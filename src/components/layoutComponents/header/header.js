import React, { useState } from 'react';
import { HeaderContainer } from './headerContainer';
import * as ROUTES from '../../../constants/routes';

import { useAuthListener } from '../../../hooks';
import { firebase } from '../../../lib/firebase.prod';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavbarText } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Header(props) {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	const { user } = useAuthListener();

	return (
		<HeaderContainer>
			<Navbar fixed='top' light expand='md'>
				<NavbarBrand className='nav-link' to={ROUTES.HOME}>
					<img src='/assets/images/check-mark.png' style={{ width: '40px', padding: '0' }} alt='checkmark' />
					<NavbarText className='ml-3'>ToDOIT</NavbarText>
				</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className='ml-auto' navbar>
						{user ? (
							<NavLink className='nav-link' to={ROUTES.DASHBOARD}>
								Dashboard
							</NavLink>
						) : null}
						<NavItem>
							<NavLink className='nav-link' to={ROUTES.ABOUT}>
								About
							</NavLink>
						</NavItem>
						{!user ? (
							<NavItem>
								<NavLink className='nav-link' to={ROUTES.SIGN_UP}>
									Sign Up
								</NavLink>
							</NavItem>
						) : null}
						{!user ? (
							<NavItem>
								<NavLink className='nav-link' to={ROUTES.SIGN_IN}>
									LOGIN
								</NavLink>
							</NavItem>
						) : null}
						{user ? (
							<NavItem>
								<span style={{ cursor: 'pointer' }} className='nav-link' onClick={() => firebase.auth().signOut()}>
									LOGOUT
								</span>
							</NavItem>
						) : null}
					</Nav>
				</Collapse>
			</Navbar>
			{props.children}
		</HeaderContainer>
	);
}

export default Header;
