import styled from 'styled-components';

export default function BackgroundStripes() {
	return (
		<>
			<Rect3 />
			<Rect1 />
			<Rect2 />
			<MiddleRect />
		</>
	);
}

const MiddleRect = styled.div`
	position: absolute;
	top: 48.2%;
	left: -6rem;
	background-color: #0048aa;
	width: 20rem;
	height: 1rem;
	transform: skew(0deg, -15deg);
	z-index: -1;

	@media only screen and (max-width: 1000px) {
		width: 16rem;
	}

	@media only screen and (max-width: 700px) {
		display: none;
	}
`;

const Rect1 = styled.div`
	position: absolute;
	top: 45%;
	left: -6rem;
	background-color: ${({ theme }) => theme.tertiary};
	width: 20rem;
	height: 4rem;
	transform: skew(0deg, -15deg);
	z-index: -1;

	@media only screen and (max-width: 1000px) {
		width: 16rem;
	}

	@media only screen and (max-width: 700px) {
		display: none;
	}
`;

const Rect2 = styled.div`
	position: absolute;
	top: 48%;
	left: -6rem;
	background-color: #0295dd;
	width: 27.5rem;
	height: 4rem;
	transform: skew(0deg, -15deg);
	z-index: -1;

	@media only screen and (max-width: 1000px) {
		width: 20rem;
		top: 48.4%;
	}

	@media only screen and (max-width: 700px) {
		display: none;
	}
`;

const Rect3 = styled.div`
	position: absolute;
	top: 20%;
	right: 0;
	background-color: ${({ theme }) => theme.primary};
	width: 27.5rem;
	height: 4rem;
	transform: skew(0deg, -15deg);
	z-index: -1;

	@media only screen and (max-width: 1000px) {
		width: 20rem;
		top: 25.3%;
	}

	@media only screen and (max-width: 700px) {
		display: none;
	}
`;
