import React from 'react';
import { Container, Row } from 'reactstrap';

export default function LayoutSection({ children, addStyle, containerColor, fullWidth, ...restProps }) {
	return (
		<Container fluid={fullWidth ? true : false} style={{ backgroundColor: containerColor ? containerColor : '' }}>
			<Row gutters={true} style={{ padding: '70px 0', ...addStyle }} {...restProps}>
				{children}
			</Row>
		</Container>
	);
}
