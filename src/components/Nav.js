import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

export default function NavigationBar() {
	const [openHam, setOpenHam] = useState(false);

	const history = useHistory();

	const handleClick = ev => {
		const path = ev.target.getAttribute('path');
		setOpenHam(false);
		history.push(path);
	};

	useEffect(() => {
		window.onscroll = () => {
			setOpenHam(false);
		};
		return () => {
			window.onscroll = null;
		};
	}, []);

	return (
		<>
			<Background active={openHam}>&nbsp;</Background>
			<Hamburger active={openHam} onClick={() => setOpenHam(old => !old)}>
				<span className='icon'>&nbsp;</span>
			</Hamburger>
			<Nav active={openHam}>
				<ul>
					<li path='/' onClick={handleClick}>
						Home
					</li>
					<li path='/posts' onClick={handleClick}>
						Posts
					</li>
					<li path='/about-us' onClick={handleClick}>
						About us
					</li>
					<li path='/register' onClick={handleClick}>
						Register
					</li>
					<li path='/Projects' onClick={handleClick}>
						Projects
					</li>
				</ul>
			</Nav>
		</>
	);
}

const Nav = styled.div`
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1500;

	opacity: ${p => (p.active ? '1' : '0')};
	width: ${p => (p.active ? '100%' : '0')};

	transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);

	ul {
		list-style: none;
		text-align: center;
		width: 100%;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		visibility: ${p => (p.active ? 'true' : 'hidden')};

		li {
			display: inline-block;
			text-decoration: none;
			font-size: 3rem;
			font-weight: 300;
			color: ${p => p.theme.white};
			text-transform: uppercase;
			padding: 1rem 3rem;
			background-image: linear-gradient(120deg, transparent 0%, transparent 50%, white 50%);
			background-size: 250%;
			cursor: pointer;
			transition: all 0.4s;

			&:hover {
				color: ${p => p.theme.black};
				background-position: 102%;
				transform: translateX(1rem);
			}
		}
	}
`;

const Background = styled.div`
	height: 6rem;
	width: 6rem;
	border-radius: 50%;
	position: fixed;
	top: 6.5rem;
	right: 6.5rem;
	background-image: ${p => `radial-gradient(${p.theme.primary},${p.theme.secondary})`};
	z-index: 1000;
	transform: ${p => (p.active ? 'scale(90)' : 'none')};

	transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);

	@media screen and (max-width: 900px) {
		top: 3.5rem;
		right: 3.5rem;
	}
`;

const Hamburger = styled.div`
	height: 7rem;
	width: 7rem;
	border-radius: 50%;
	position: fixed;
	top: 6rem;
	right: 6rem;
	background-color: ${p => p.theme.white};
	z-index: 2000;
	box-shadow: ${p => `0 0 3rem ${p.theme.slate}30`};

	text-align: center;
	cursor: pointer;

	@media screen and (max-width: 900px) {
		top: 3rem;
		right: 3rem;
	}

	&:hover .icon::before {
		top: ${p => (p.active ? '0' : '-1rem')};
	}

	&:hover .icon::after {
		top: ${p => (p.active ? '0' : '1rem')};
	}

	span {
		position: relative;
		margin-top: 3.5rem;
		width: 3rem;
		height: 2px;
		background-color: ${p => (p.active ? 'transparent' : p.theme.primary)};
		display: inline-block;

		&::before,
		&::after {
			width: 3rem;
			height: 2px;
			background-color: ${p => p.theme.primary};
			display: inline-block;
			content: '';
			position: absolute;
			left: 0;
			transition: all 0.2s;
		}

		&::before {
			top: ${p => (p.active ? '0' : '-0.8rem')};
			transform: ${p => (p.active ? 'rotate(135deg)' : 'rotate(0deg)')};
		}

		&::after {
			top: ${p => (p.active ? '0' : '0.8rem')};
			transform: ${p => (p.active ? 'rotate(-135deg)' : 'rotate(0deg)')};
		}
	}
`;
