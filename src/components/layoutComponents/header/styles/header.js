import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';
import * as color from '../../../../constants/colors';

export const Background = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${color.darkPrimary};
`;

export const Frame = styled.div``;

export const Container = styled.div`
	display: flex;
	margin: 0 56px;
	height: 64px;
	padding: 18px 0;
	align-items: center;

	a {
		display: flex;
	}

	@media (max-width: 1000px) {
		margin: 0 30px;
	}
`;

export const Logo = styled.img`
	height: 32px;
	width: 108px;
	margin-right: 40px;

	@media (min-width: 1449px) {
		height: 45px;
		width: 167px;
	}
`;

export const LinkGroup = styled.div`
	display: flex;
	margin-left: auto;
`;

export const ButtonLink = styled(ReactRouterLink)`
	display: block;
	height: fit-content;
	color: ${color.darkShade};
	border: 0;
	font-size: 15px;
	border-radius: 3px;
	padding: 8px 17px;
	cursor: pointer;
	text-decoration: none;
	box-sizing: border-box;
	margin: 4px;

	&:hover {
		text-decoration: none;
		background-color: ${color.darkShade};
		color: ${color.ligthPrimary};
	}
`;
