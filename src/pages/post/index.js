import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Container, Heading, Footer, LoaderContainer, Loader } from 'components';
import { logoColored } from 'images';
import Card from './Card';
import { fonts } from 'constants/theme';

export default function Post() {
	const [load, setLoad] = useState(true);
	const [posts, setPosts] = useState([]);

	const getPost = async () => {
		try {
			const { data } = await axios.get('/post/all');
			setPosts(data.data);
		} catch (err) {
			console.error(err);
		} finally {
			setLoad(false);
		}
	};

	useEffect(() => {
		getPost();
	}, []);

	return (
		<>
			<Container>
				<Heading gradient>Posts</Heading>
				{load ? (
					<LoaderContainer>
						<Loader />
					</LoaderContainer>
				) : (
					posts.length === 0 && (
						<Empty>
							<img className='logo' src={logoColored} alt='logo'></img>
							<h2>Such emptiness 😶</h2>
						</Empty>
					)
				)}

				{posts.map((val, ind) => {
					return <Card key={ind} value={val} ind={ind} />;
				})}
			</Container>
			<Footer />
		</>
	);
}

const Empty = styled.div`
	min-height: 80vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	h2 {
		text-align: center;
		font-family: ${fonts.monospace};
		/* text-transform: uppercase; */
	}

	img {
		width: 8rem;
	}
`;
