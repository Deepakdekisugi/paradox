import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import axios from 'axios';

import { LoaderContainer } from 'components';
import Loader from 'components/Loader';
import Content from './Content';

export default function CustomPost() {
	const [data, setData] = useState(null);
	const history = useHistory();
	const { id } = useParams();

	const fetchData = async () => {
		try {
			const { data: response } = await axios.get(`/post/${id}`);
			setData(response.data);
		} catch (err) {
			history.push('/posts');
		}
	};

	useEffect(() => {
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return data === null ? (
		<LoaderContainer>
			<Loader />
		</LoaderContainer>
	) : (
		<Content data={data} />
	);
}
