import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaGlobe } from 'react-icons/fa';

import { fonts } from 'constants/theme';
import { benxene} from 'images';

const Icons = {
	github: <FaGithub />,
	linkedIn: <FaLinkedin />,
	email: <FaEnvelope />,
	twitter: <FaTwitter />,
	portfolio: <FaGlobe />
};

export default function AboutCard({
	id,
	profile,
	name,
	designation,
	year,
	tag,
	socialLinks,
	handleClick,
	role,
	fromBenxene
}) {
	return (
		<Container
			id={id}
			key={id}
			onClick={() => {
				handleClick?.(role, id);
			}}
		>
			<ProfileImg>
				<img src={profile} alt={name}></img>
			</ProfileImg>
			<Content>
				<h2>{name}</h2>
				<Text bold>{designation}</Text>
				{year && <Text>{year}</Text>}
				{tag && (
					<Text>
						"{tag.substring(0, 60)}
						{tag.length > 60 && '...'}"
					</Text>
				)}
				{socialLinks && (
					<IconContainer>
						{Object.entries(socialLinks).map(item => (
							<a href={item[1]} key={item[1]}>
								{Icons[item[0]]}
							</a>
						))}
					</IconContainer>
				)}
			</Content>
			<Rect1 />
			<Rect2 />
			<Triangle>{fromBenxene && <img src={benxene} alt='Paradox' />}</Triangle>
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	width: 50rem;
	height: 23rem;
	padding: 2rem;
	margin: 1rem;
	display: flex;
	background-color: ${props => props.theme.lightGrey};
	border-radius: 2rem;
	overflow: hidden;
	box-shadow: ${props => `1px 1px 20px ${props.theme.black}30`};
	cursor: ${props => (props.id ? 'pointer' : 'default')};

	@media only screen and (max-width: 600px) {
		width: 90%;
		height: auto;
		overflow: visible;
	}

	@media only screen and (max-width: 420px) {
		margin-top: 5rem;
	}

	& h2 {
		font-family: ${fonts.sansSerif};
		color: ${p => p.theme.primary};
	}
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	z-index: 1;
	flex-shrink: 1;
`;

const IconContainer = styled.div`
	position: relative;
	flex: 1;
	display: flex;
	align-items: flex-end;
	z-index: 1;

	& a {
		position: relative;
		font-size: 2.5rem;
		margin-right: 2rem;

		& svg {
			transition: all 0.2s;

			&:hover {
				cursor: pointer;
				fill: ${props => props.theme.primary};
			}
		}
	}
`;

const ProfileImg = styled.div`
	border-radius: 10%;
	border: 0.3rem solid ${props => props.theme.primary};
	margin-right: 4rem;
	flex-shrink: 0;
	width: 16rem;
	height: 18rem;
	overflow: hidden;
	position: relative;
	z-index: 100;

	& img {
		display: inline-block;
		object-fit: cover;
		object-position: top center;
		height: 100%;
		width: 100%;
	}

	@media only screen and (max-width: 600px) {
		position: absolute;
		width: 20vw;
		height: 20vw;
		border-radius: 50%;
		right: -6%;
		top: 3%;
	}

	@media only screen and (max-width: 420px) {
		left: 50%;
		top: -25%;
		transform: translateX(-50%);
	}
`;

const Rect1 = styled.div`
	position: absolute;
	top: 45%;
	left: 0;
	background-color: ${props => `${props.theme.secondary}80`};
	width: 25rem;
	height: 4rem;
	transform: skew(0deg, -25deg);

	@media only screen and (max-width: 600px) {
		display: none;
	}
`;

const Rect2 = styled.div`
	position: absolute;
	top: 35%;
	right: 0;
	background-color: ${props => `${props.theme.tertiary}`};
	width: 18rem;
	height: 1.5rem;
	transform: skew(0deg, -25deg);

	@media only screen and (max-width: 600px) {
		background-color: ${props => `${props.theme.tertiary}80`};
	}
`;

const Text = styled.p`
	font-size: ${props => (props.bold ? '1.3rem' : '1.2rem')};
	font-weight: ${props => (props.bold ? '700' : '600')};
	z-index: 1;
`;

const Triangle = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
	background-color: ${props => `${props.theme.tertiary}80`};
	clip-path: polygon(100% 0, 0 100%, 100% 100%);
	width: 25rem;
	height: 10rem;

	@media only screen and (max-width: 600px) {
		border-bottom-right-radius: 2rem;
	}

	img {
		height: 60%;
		width: auto;
		position: absolute;
		top: 30%;
		right: 5%;
		display: inline-block;
		border: none;

		@media only screen and (max-width: 400px) {
			right: 0%;
		}
	}
`;
