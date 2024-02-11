import { useRef, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

import { Button } from 'components';
import { logoWhite, hero } from 'images';

const text =
	"We're here to dig out your talents and find out what you're passionate about, let's join together and grow together.";

export default function Home() {
	const contentRef = useRef(null);
	const countRef = useRef(1);
	const intervalRef = useRef(null);
	const [showButton, setShowButton] = useState(false);

	function writeText() {
		if (contentRef.current) {
			contentRef.current.innerText = text.slice(0, countRef.current);
			countRef.current++;
		}
	}

	function activateInterval() {
		intervalRef.current = setInterval(() => {
			if (countRef.current > text.length) {
				contentRef.current.style = 'position: static';
				setShowButton(true);
				return;
			}
			writeText();
		}, 80);
	}

	useEffect(() => {
		activateInterval();
		return () => {
			clearInterval(intervalRef.current);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Hero>
			<div className='container'>
				<div className='hero__content'>
					<div>
						<img className='logo' src={logoWhite} alt='logo' />
						<h1>Paradox Coding Club</h1>
						<span>of Shivalik College Dehradun</span>
						<div className='animated'>
							<p ref={contentRef}></p>

							
						</div>
					</div>
					<img src={hero} alt='Code development'></img>
				</div>
			</div>
		</Hero>
	);
}

const fade = keyframes`
	from {
		opacity: 0;
	} to {
		opacity: 1;
	}
`;

const Hero = styled.div`
	min-height: 100vh;
	background-image: linear-gradient(25deg, rgba(2, 130, 251, 1) 40%, rgba(2, 239, 81, 1) 100%);
	display: flex;
	align-items: center;
	padding: 5em 2rem;
	position: relative;

	.logo {
		width: 8rem;
		display: none;

		@media only screen and (max-width: 750px) {
			display: block;
			margin-bottom: 3em;
		}
	}

	.container {
		max-width: 120rem;
		height: 100%;
		margin: 0 auto;

		@media only screen and (max-width: 120rem) {
			max-width: 90%;
		}

		@media only screen and (max-width: 600px) {
			max-width: 95%;
		}
	}

	.hero__content {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 5rem;
		align-items: center;
		color: white;

		@media only screen and (max-width: 750px) {
			grid-template-columns: 1fr;

			& > div {
				place-self: flex-start;
				grid-row: 1/2;
				margin-top: 12rem;
				margin-bottom: 1rem;
			}

			img {
				place-self: flex-start;
				grid-row: 2/3;
			}
		}

		& h1 {
			line-height: 1.2em;
			margin-bottom: -1rem;
		}
		& span {
			font-size: 1.3rem;
		}

		.animated {
			min-height: 10em;
		}

		p {
			margin: 2rem 0;
		}

		& img {
			max-width: 100%;
		}
	}

	.hero-btn {
		animation: ${fade} 0.4s linear;
	}
`;
