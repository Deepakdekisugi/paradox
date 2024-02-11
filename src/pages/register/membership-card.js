import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import { useHistory, useLocation } from 'react-router';
import { exportComponentAsPNG } from 'react-component-export-image';

import { BackgroundStripes, Button, Heading } from 'components';
import { logoTranslucent } from 'images';
import { fonts } from 'constants/theme';

const FRAME_SIZE = {
	height: 275,
	width: 520
};

export default function MembershipCard() {
	const membershipCard = useRef();
	const location = useLocation();
	const history = useHistory();

	const {
		state: {
			data: { name, registerNumber, email, imageUrl, membershipNumber }
		}
	} = location;

	useEffect(() => {
		if (!location.state) {
			history.push('/');
		}
	}, [history, location]);

	return (
		<SuccessPage>
			<Heading gradient>Congrats 💥</Heading>

			<ExportFrame ref={membershipCard}>
				<Card>
					<div className='gradient' />
					<div src={logoTranslucent} alt='logo' className='logo' />
					<h3>Paradox Coding Club</h3>
					<div className='content'>
						<figure>
							<img src={imageUrl} alt='avatar' />
						</figure>
						<h4>{name}</h4>
						<p>{registerNumber}</p>
						<p className='email'>{email}</p>
					</div>
					<p className='membership-number'>
						#{'0'.repeat(6 - membershipNumber.toString().length) + membershipNumber}
					</p>
				</Card>
			</ExportFrame>

			<Button
				component='button'
				onClick={() =>
					exportComponentAsPNG(membershipCard, {
						fileName: `Infinite-Loop-${name.replace(' ', '-')}`,
						html2CanvasOptions: { ...FRAME_SIZE }
					})
				}
			>
				Download
			</Button>

			<BackgroundStripes />
			<DiscordInvite>
				<iframe
					title='discord invite'
					src='https://discord.com/widget?id=825272850964414484&theme=dark'
					width='350'
					height='500'
					allowtransparency='true'
					frameborder='0'
					sandbox='allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
				></iframe>
			</DiscordInvite>
		</SuccessPage>
	);
}

const DiscordInvite = styled.div`
	margin-bottom: 1.5rem;
`;

const SuccessPage = styled.main`
	display: grid;
	place-content: center;
	place-items: center;
	grid-gap: 4rem;
`;

const Card = styled.div`
	position: relative;
	z-index: 10;
	width: 500px;
	height: 275px;
	margin: auto;
	border-radius: 2rem;
	overflow: hidden;
	color: ${({ theme }) => theme.white};

	.gradient {
		position: absolute;
		z-index: -1;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			135deg,
			${({ theme }) => `${theme.secondary} -50%, ${theme.primary} 150%`}
		);
		filter: blur(1px);
	}

	.logo {
		position: absolute;
		z-index: 0;
		width: 80%;
		height: 80%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-image: url(${logoTranslucent});
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
	}

	h3 {
		font-size: 2.2rem;
		font-weight: 600;
		margin: 1.7rem auto;
		text-align: center;
	}

	.membership-number {
		position: absolute;
		bottom: 1rem;
		left: 50%;
		transform: translateX(-50%);

		color: ${({ theme }) => theme.black};
		font-size: 1.6rem;
		font-family: ${fonts.monospace};
		text-align: center;
		background: ${({ theme }) => theme.white}30;
		padding: 0.1rem 1.4rem;
		border-radius: 4rem;
	}

	.content {
		width: 100%;
		display: grid;
		grid-template-columns: 0.8fr 1fr;
		grid-template-rows: repeat(3, 3.5rem);
		align-items: center;
		overflow-wrap: break-word;
		padding-right: 1rem;

		figure {
			width: 12rem;
			height: 12rem;
			position: relative;
			grid-column: 1/2;
			grid-row: 1 / -1;
			margin-left: 8.5rem;
			background: linear-gradient(
				135deg,
				${({ theme }) => `${theme.secondary} 0%, ${theme.primary} 100%`}
			);
			border-radius: 50%;
			overflow: hidden;

			img {
				display: block;
				width: 90%;
				height: 90%;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				border-radius: 50%;
				background-color: ${({ theme }) => theme.grey};
				object-fit: cover;
				object-position: bottom center;
			}
		}

		h4 {
			font-family: inherit;
		}

		.email {
			overflow-wrap: anywhere;
			font-size: 1.3rem;
		}
	}
`;

const ExportFrame = styled.div`
	width: ${FRAME_SIZE.width}px;
	height: ${FRAME_SIZE.height}px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0;
	overflow: hidden;
`;
