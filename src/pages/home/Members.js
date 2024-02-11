import styled from 'styled-components';
import { Card, Container, Heading } from 'components';

export default function Members() {
	return (
		<Container>
			<Heading gradient margin='huge'>
				Our core members
			</Heading>
			<CoreBox>
				<Card
					imgSrc='https://avatars.githubusercontent.com/u/151555907'
					name='Kundan Soni'
					position='Vice President'
				/>
				<Card
					imgSrc='https://avatars.githubusercontent.com/u/126109527'
					name='Shivam Kumar'
					position='President'
					isSpecial
				/>
				<Card
					imgSrc='https://avatars.githubusercontent.com/u/55588916'
					name='Deepak Kumar'
					position='Full Stack Developer'
				/>
			</CoreBox>
		</Container>
	);
}

const CoreBox = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 3rem;

	@media only screen and (max-width: 1000px) {
		& > div:nth-child(even) {
			order: -1;
		}
	}

	@media only screen and (max-width: 600px) {
		flex-direction: column;
		align-items: center;
	}
`;
