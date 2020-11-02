import React, { useState } from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
// import logo from '../logo.svg';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default function HeaderContainer({ children }) {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<Header>
			<Navbar color='light' light expand='md'>
				<NavbarBrand href='/'>ToDOIT</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className='ml-auto' navbar>
						<NavItem>
							<NavLink href={ROUTES.ABOUT}>About</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href={ROUTES.SIGN_UP}>Sign Up</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href={ROUTES.SIGN_IN}>LOGIN</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
			{children}
		</Header>
	);
}
