import styled from 'styled-components';
import { colors } from 'constants/theme';
import { benxene, logoWhite } from 'images';

export default function Footer() {
	return (
		<Div>
			<AboutClub>
				<div className='club-and-clg'>
					<img src={logoWhite} alt='logo' />
					<p>
						Shivalik College of Engineering,
						<br />
						Uttrakhand Technical University,
						<br />
						Dehradun, Uttrakhand - 248197.
					</p>
				</div>
				<hr />
				<div className='devs'>
					<p>Made and maintained with ❤️ by</p>
					<a href='https://github.com/Deepakdekisugi'>
						<img src={benxene} alt='Paradox' />
					</a>
				</div>
			</AboutClub>
			<Copyright>
				Copyrights &copy; {new Date().getFullYear()}, Paradox Coding Club, SCE, Dehradun.
			</Copyright>
		</Div>
	);
}

const Div = styled.div`
	background-color: #3f3d56;
	margin-top: 5rem;
`;

const AboutClub = styled.div`
	padding: 6rem 0;
	color: ${colors.white};
	max-width: 120rem;
	margin: auto;
	display: flex;
	gap: 3rem;
	justify-content: space-around;
	align-items: center;

	hr {
		background-color: ${props => props.theme.grey}01;
		align-self: stretch;
	}

	@media only screen and (max-width: 120rem) {
		max-width: 90%;
	}

	@media only screen and (max-width: 900px) {
		flex-direction: column;
	}

	@media only screen and (max-width: 600px) {
		max-width: 95%;
	}

	.club-and-clg {
		display: flex;
		align-items: center;

		gap: 3rem;

		@media only screen and (max-width: 650px) {
			flex-direction: column;
		}

		img {
			width: 12rem;
		}
	}

	.devs {
		text-align: center;
		img {
			margin: auto;
			width: 15rem;
		}
	}
`;

const Copyright = styled.div`
	background-color: ${colors.black};
	padding: 1.8rem;
	color: ${colors.white};
	text-align: center;
	font-size: 1.2rem;
`;
