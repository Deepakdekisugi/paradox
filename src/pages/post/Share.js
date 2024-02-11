import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaTwitter, FaFacebookSquare, FaClipboard } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';

import { share } from 'images';

export default function Share({ value, style }) {
	const [showModal, setShowModal] = useState(true);

	useEffect(() => {
		if (navigator.share) {
			setShowModal(false);
		}
	}, []);

	const handleShare = value => {
		if (navigator.share) {
			navigator
				.share({
					title: value.title,
					text: value.description,
					url: `${window.origin}/post/${value._id}`
				})
				.catch(error => {
					console.log(error);
				});
		} else {
			setShowModal(true);
		}
	};

	const handleCopy = () => {
		var textField = document.createElement('textarea');
		textField.innerText = `${window.origin}/post/${value._id}`;
		document.body.appendChild(textField);
		textField.select();
		document.execCommand('copy');
		textField.remove();
		setShowModal(false);
		toast.success('Link Copied to clipboard', {
			position: 'bottom-center',
			autoClose: 3000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined
		});
	};

	return (
		<Container>
			<ToastContainer />
			{!showModal ? (
				<Bottom style={style} onClick={() => handleShare(value)}>
					<img src={share} alt={share}></img>
				</Bottom>
			) : (
				<Modal>
					<p>Share</p>
					<a href={`http://www.facebook.com/sharer.php?u=${window.origin}/post/${value._id}`}>
						<FaFacebookSquare></FaFacebookSquare>
					</a>
					<a
						href={`https://twitter.com/share?url=
						${window.origin}/post/${value._id}
						&amp;text=Check%20it%20out&amp;hashtags=infiniteloopclub`}
					>
						<FaTwitter />
					</a>

					<a
						href={`mailto:?Subject=Club%20post&amp;Body=I%20saw%20this%20and%20thought%20of%20you!%20
						${window.origin}/post/${value._id}`}
					>
						<FaEnvelope />
					</a>
					<Copy onClick={handleCopy}>
						<FaClipboard />
					</Copy>
				</Modal>
			)}
		</Container>
	);
}

const Container = styled.div`
	position: relative;
`;

const Bottom = styled.div`
	display: flex;
	width: 3rem;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	img {
		display: inline-block;
		width: 100%;
		cursor: pointer;
	}
`;

const Modal = styled.div`
	padding: 1em;
	padding-left: 0px;
	border-radius: 0.5em;
	background-color: ${p => p.theme.white};

	p {
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		background-image: ${p =>
			`linear-gradient(90deg, ${p.theme.primary} 20%, ${p.theme.secondary} 80%)`};
	}

	a {
		text-decoration: none;
		margin: 0.5em;

		& svg {
			transition: all 0.2s;
			font-size: 2rem;

			&:hover {
				cursor: pointer;
				fill: ${props => props.theme.primary};
			}
		}
	}
`;

const Copy = styled.div`
	margin: 0.5em;
	cursor: pointer;
	display: inline-block;

	& svg {
		transition: all 0.2s;
		font-size: 2rem;

		&:hover {
			cursor: pointer;
			fill: ${props => props.theme.primary};
		}
	}
`;
