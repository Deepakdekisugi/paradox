import styled from 'styled-components';
import Particles from 'react-particles-js';

import { Button, Container, Heading } from 'components';
import { colors } from 'constants/theme';

export default function Cta() {
	return (
		<Div>
			<Particles
				style={{ position: 'absolute', left: 0, height: '100%', width: '100%' }}
				params={{
					particles: {
						value: 40,
						density: {
							enable: true,
							value_area: 800
						},
						size: {
							value: 3
						}
					},
					interactivity: {
						detect_on: 'window',
						events: {
							onhover: {
								enable: true,
								mode: 'repulse'
							},
							resize: true
						}
					}
				}}
			/>
			<Container>
				<Heading margin='small'>Join Today</Heading>
				<p>
					What are you waiting for? Register now and we're sure you would cherish the entire journey
					with us.
				</p>
				<Button component='link' to='/register' style={{ zIndex: 100, position: 'relative' }}>
					Register
				</Button>
			</Container>
		</Div>
	);
}

const Div = styled.div`
	background-image: linear-gradient(120deg, ${colors.secondary}, ${colors.primary});
	text-align: center;
	padding: 0.5rem 0;
	color: ${colors.white};
	position: relative;
	overflow: hidden;

	& p {
		margin: 1rem 0 3.5rem 0;
	}
`;
