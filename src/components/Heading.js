import styled from 'styled-components';
import { colors } from 'constants/theme';

export default styled.h1`
	${props =>
		props.gradient &&
		`
			background-image: linear-gradient(90deg, ${colors.primary} 20%, ${colors.secondary} 80%);
			-webkit-background-clip: text;
			background-clip: text;
			-webkit-text-fill-color: transparent;
	`}

	line-height: 1.2em;
	margin: 0.6em auto;
	margin-bottom: ${props => {
		switch (props.margin) {
			case 'huge':
				return '.8em';
			case 'medium':
				return '.5em';
			case 'small':
				return '.3em';
			default:
				return '.1em';
		}
	}};
	text-align: center;
`;
