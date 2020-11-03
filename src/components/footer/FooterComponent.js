import React from 'react';
import * as colors from '../../constants/colors';
import { Col } from 'reactstrap';
import { LayoutSection, Feature } from '../index';

export default function FooterComponent(props) {
	return (
		<>
			<LayoutSection fullWidth containerColor={colors.darkPrimary}>
				<Col md={2}>
					<Feature>
						<Feature.SubTitle>Logo</Feature.SubTitle>
					</Feature>
				</Col>
				<Col md={6}>
					<Feature>
						<Feature.SubTitle>Social Media?</Feature.SubTitle>
					</Feature>
				</Col>
				<Col md={4}>
					<Feature>
						<Feature.SubTitle>SignUp</Feature.SubTitle>
					</Feature>
				</Col>
			</LayoutSection>
		</>
	);
}
