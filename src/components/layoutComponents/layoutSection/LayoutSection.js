import React from 'react';
import { Container, Row } from 'reactstrap';

export default function LayoutSection({ children, rowStyle, containerStyle, fullWidth, ...restProps }) {
	return (
		<Container fluid={fullWidth ? true : false} style={{ ...containerStyle }}>
			<Row style={{ padding: '70px 0', ...rowStyle }} {...restProps}>
				{children}
			</Row>
		</Container>
	);
}
