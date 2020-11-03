import styled from 'styled-components/macro';
import * as color from '../../../constants/colors';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	justify-content: center;
	align-items: center;
	padding: 45px;

	button {
		background-color: ${color.lightSecondary};
		border: none;
		color: ${color.darkShade};
		&:hover {
			background-color: ${color.darkShade};
			color: ${color.ligthPrimary};
		}
	}
`;

export const Title = styled.h1`
	color: ${color.darkShade};
	max-width: 640px;
	font-size: 50px;
	font-weight: 500;
	margin: auto;

	@media (max-width: 600px) {
		font-size: 35px;
	}
`;

export const SubTitle = styled.h2`
	color: ${color.darkShade};
	font-size: 26px;
	font-weight: normal;
	margin: 16px auto;

	@media (max-width: 600px) {
		font-size: 18px;
	}
`;
