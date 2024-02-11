import styled from 'styled-components';

import { Container } from 'components';
import TeamCard from './TeamContainer';

export default function TeamDetails({ title, data, handleClick, vote }) {
	return (
		<Container key={title}>
			<TeamName>{title}</TeamName>
			<TeamCard title={title} data={data} handleClick={handleClick} vote={vote} />
		</Container>
	);
}

const TeamName = styled.h2`
	font-size: 2.5rem;
	margin-bottom: 1.8rem;

	@media only screen and (max-width: 600px) {
		font-size: 2rem;
	}
`;
