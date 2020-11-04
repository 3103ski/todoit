import styled from 'styled-components/macro';

// layout
export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const InnerContainer = styled.div`
	min-width: 900px;
	min-height: 500px;
	height: 50vh;
	width: 70%;
	display: flex;
	justify-content: center;
`;

export const Column = styled.div`
	width: 49%;
	margin: 0 auto;
	box-sizing: border-box;
	padding: 50px 20px 20px 20px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
`;

// text
export const Title = styled.h1`
	position: absolute;
	top: 100px;
	left: 200px;
`;
export const SubTitle = styled.h3``;
