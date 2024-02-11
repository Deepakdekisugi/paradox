import { useEffect } from 'react';
import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router';

import { voteSuccess } from 'images';
import { Heading } from 'components';

export default function Success() {
	const location = useLocation();
	const history = useHistory();

	useEffect(() => {
		if (!location.state) {
			history.push('/vote/login');
		}
	}, [location, history]);

	return (
		<SuccessContainer>
			<img src={voteSuccess} alt='voteSuccess' />
			<Heading gradient>Vote casted Successfully!</Heading>
		</SuccessContainer>
	);
}

const SuccessContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	min-height: 100vh;
	padding: 1rem;

	& > img {
		width: 35%;

		@media screen and (max-width: 1200px) {
			width: 40%;
		}
		@media screen and (max-width: 1000px) {
			width: 50%;
		}
		@media screen and (max-width: 900px) {
			width: 55%;
		}
		@media screen and (max-width: 800px) {
			width: 60%;
		}
		@media screen and (max-width: 700px) {
			width: 70%;
		}
		@media screen and (max-width: 500px) {
			width: 80%;
		}
		@media screen and (max-width: 400px) {
			width: 90%;
		}
	}
`;
