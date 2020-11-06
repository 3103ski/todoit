import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/';
import { HeaderContainer } from './headerContainer';
import * as ROUTES from '../../../constants/routes';

import { useAuthListener } from '../../../hooks';

import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavbarText } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Header(props) {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	const { user } = useAuthListener();

	const [todosCleared, todosClearedToggle] = useState(false);

	useEffect(() => {
		if (!todosCleared && !user) {
			props.resetTodos();
			console.log('*+*+*+*+*+*+* cleared TODO LISTS *+*+*+*+*+*+*+*');
		}
		todosClearedToggle(true);
	}, [todosCleared, user, props.resetTodos, todosClearedToggle, props]);

	return (
		<HeaderContainer>
			<Navbar fixed='top' light expand='md'>
				{user ? (
					<NavLink className='nav-link' to={ROUTES.DASHBOARD}>
						<img src='/assets/images/check-mark.png' style={{ width: '40px', padding: '0' }} alt='checkmark' />
						<NavbarText className='ml-3'>ToDOIT</NavbarText>
					</NavLink>
				) : (
					<NavLink className='nav-link' to={ROUTES.HOME}>
						<img src='/assets/images/check-mark.png' style={{ width: '40px', padding: '0' }} alt='checkmark' />
						<NavbarText className='ml-3'>ToDOIT</NavbarText>
					</NavLink>
				)}
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
								<span style={{ cursor: 'pointer' }} className='nav-link' onClick={() => props.logout()}>
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
const mapStateToProps = (state) => {
	return {
		hasLists: state.app.hasLists,
		hasProfile: state.app.profileLoaded,
		todoLists: state.app.todoLists,
	};
};

const mapDispatchToProps = {
	logout: () => actions.logoutUser(),
	getLists: (userId) => actions.getListsInit(userId),
	resetTodos: () => actions.resetTodosReducer(),
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
