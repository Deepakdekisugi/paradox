import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button, Footer, Heading } from 'components';
import axios from 'axios';
import { useHistory, useLocation } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';

import TeamDetails from 'pages/about/TeamDetails';
import LoadingToast, { LoadingToastOptions } from 'components/LoadingToast';
import details from 'data/nominees';

export default function Voting() {
	const [vote, setVote] = useState({
		president: '',
		vicePresident: '',
		secretary: '',
		youthRepresentative: ''
	});

	const location = useLocation();
	const history = useHistory();

	const handleClick = (key, value) => {
		setVote(old => {
			return { ...old, [key]: value };
		});
	};

	const handleSubmit = async () => {
		try {
			toast(LoadingToast, LoadingToastOptions);
			const { data } = await axios.post('/vote/make', {
				token: location.state.token,
				...vote
			});
			if (data.done) {
				toast.dismiss();
				history.replace({
					...location,
					state: {
						done: true
					}
				});
			}
		} catch (err) {
			toast.dismiss();
			if (err.response) {
				const { message } = err.response?.data;
				// Request made and server responded
				toast.error(message ?? 'Please try again later!');
				if (message === 'Request timed out, please try again later') {
					setTimeout(() => {
						history.push('/vote/login');
					}, 3000);
				}
			}
			console.log(err);
		}
	};

	useEffect(() => {
		if (!location.state) {
			history.push('/vote/login');
		} else if (location.state.done) {
			history.push({
				pathname: '/vote/success',
				state: {
					done: true
				}
			});
		} else if (!location.state.token) {
			history.push('/vote/login');
		}
	}, [location, history]);

	return (
		<VotingContainer>
			<Heading gradient>Choose your Candidate!</Heading>
			{details.map(({ title, data }, index) => {
				return (
					<TeamDetails
						key={index}
						title={title}
						data={data}
						handleClick={handleClick}
						vote={vote}
					/>
				);
			})}
			<p style={{ margin: '4rem auto', textAlign: 'center' }}>
				** Select one candidate from each category **
			</p>
			<ButtonContainer>
				<SubmitButton
					disabled={
						vote.president === '' ||
						vote.vicePresident === '' ||
						vote.secretary === '' ||
						vote.youthRepresentative === ''
					}
					type='submit'
					onClick={handleSubmit}
				>
					Submit
				</SubmitButton>
			</ButtonContainer>
			<ToastContainer
				position='bottom-center'
				autoClose={5000}
				hideProgressBar
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<Footer />
		</VotingContainer>
	);
}

const ButtonContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const SubmitButton = styled(Button)`
	margin-top: 2rem;
`;

const VotingContainer = styled.div`
	margin: 8rem auto auto; /* left, horizontal, bottom */
`;
