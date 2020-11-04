import React from 'react';
import { Container, Title, SubTitle, InnerContainer, Column } from './styles/dashboard';

export default function Dashboard({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Dashboard.Title = function ({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Dashboard.SubTitle = function ({ children, ...restProps }) {
	return <SubTitle {...restProps}>{children}</SubTitle>;
};

Dashboard.InnerContainer = function ({ children, ...restProps }) {
	return <InnerContainer {...restProps}>{children}</InnerContainer>;
};

Dashboard.Column = function ({ children, ...restProps }) {
	return <Column {...restProps}>{children}</Column>;
};
