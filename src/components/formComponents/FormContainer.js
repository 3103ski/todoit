import React from 'react';
import * as colors from '../../constants/colors';

export default function FormContainer({ children, ...props }) {
	const radius = '15px';
	const mainContainerStyle = {
		border: `solid 1px ${colors.ligthPrimary}`,
		borderRadius: radius,
	};
	const titleStyle = {
		backgroundColor: colors.ligthPrimary,
		borderTopLeftRadius: radius,
		borderTopRightRadius: radius,
		padding: '20px',
		display: 'flex',
		justifyContent: 'center',
	};
	const formContainerStyle = {
		padding: '40px 20px',
	};

	return (
		<div style={mainContainerStyle}>
			<div style={titleStyle}>
				<h1>{props.formTitle}</h1>
			</div>
			<div style={formContainerStyle}>{children}</div>
		</div>
	);
}
