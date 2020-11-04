import React from 'react';
import { ListContainer, ListFrame, ListItem, ListTitle, ContainerListFrame } from './styles/list';

export default function List({ children, ...restProps }) {
	return <ListFrame {...this.props.restProps}>{this.props.children}</ListFrame>;
}

List.ListTitle = function ({ children, ...restProps }) {
	return <ListTitle {...restProps}>{children}</ListTitle>;
};

List.ListContainer = function ({ children, ...restProps }) {
	return (
		<ListContainer {...restProps}>
			<ListTitle>
				<h1>{restProps.listTitle}</h1>
			</ListTitle>
			<ContainerListFrame>{children}</ContainerListFrame>
		</ListContainer>
	);
};

List.ListItem = function ({ children, ...restProps }) {
	let left, right, arrow, square, squareChk, todo;
	todo = restProps.todo ? restProps.todo : null;

	arrow = (
		<span className='toListBtn'>
			<i class='fas fa-arrow-right' />
		</span>
	);
	square = (
		<span className={`${restProps.offList ? 'offListCheck' : 'onListCheck'}`}>
			<i class='far fa-square' />
		</span>
	);

	squareChk = (
		<span className={`${restProps.offList ? 'offListCheck' : 'onListCheck'}`}>
			<i class='fas fa-check-square' />
		</span>
	);
	if (todo) {
		if (restProps.isTodo && restProps.offList) {
			left = todo.isComplete ? squareChk : square;
			right = arrow;
		}
		if (restProps.isTodo && !restProps.offList) {
			left = null;
			right = todo.isComplete ? squareChk : square;
		}
	}
	if (restProps.isListing) {
		left = null;
		right = arrow;
	}

	return (
		<ListItem className={`${restProps.isListing ? 'isListing' : ''}`} {...restProps}>
			{left}
			{children}
			{right}
		</ListItem>
	);
};
