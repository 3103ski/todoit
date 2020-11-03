import React, { useState } from 'react';
import { HeaderContainer } from './headerContainer';
import * as ROUTES from '../../../constants/routes';
// import logo from '../logo.svg';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavbarText } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default function Header({ children }) {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<HeaderContainer>
			<Navbar fixed='top' light expand='md'>
				<NavbarBrand>
					<NavLink className='nav-link' to={ROUTES.HOME}>
						<img src='/assets/images/check-mark.png' style={{ width: '40px', padding: '0' }} alt='checkmark' />
						<NavbarText className='ml-3'>ToDOIT</NavbarText>
					</NavLink>
				</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className='ml-auto' navbar>
						<NavItem>
							<NavLink className='nav-link' to={ROUTES.ABOUT}>
								About
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className='nav-link' to={ROUTES.SIGN_UP}>
								Sign Up
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className='nav-link' to={ROUTES.SIGN_IN}>
								LOGIN
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
			{children}
		</HeaderContainer>
	);
}
