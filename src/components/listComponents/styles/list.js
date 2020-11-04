import styled from 'styled-components/macro';
import * as colors from '../../../constants/colors';

const containerRadius = '8px';

export const ListFrame = styled.div`
	width: 90%;
`;

export const ListItem = styled.div`
	display: flex;
	align-items: center;

	width: 100%;
	height: 50px;

	margin-bottom: 5px;
	padding: 10px 20px;

	border: solid 1px grey;
	border-radius: 3px;

	&.isListing:hover {
		cursor: pointer;
	}

	.onListCheck,
	.toListBtn {
		margin-left: auto;
	}

	.offListCheck {
		margin-right: 15px;
	}

	i {
		font-size: 19px;
		&:hover {
			cursor: pointer;
		}
	}
`;

export const ListContainer = styled.div`
	border: solid 3px ${colors.ligthPrimary};
	padding: 0;
	width: 100%;
	border-radius: ${containerRadius};
`;

export const ListTitle = styled.div`
	background-color: ${colors.ligthPrimary};
	padding: 10px 15px 10px 25px;
	width: 100%;
	display: flex;
	align-items: center;
	h1 {
		margin: 0;
	}
`;

export const ContainerListFrame = styled.div`
	width: 90%;
	margin: 30px auto 30px auto;
`;
