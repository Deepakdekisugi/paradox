import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import Content from './Content';

export default function IndividualPost() {
	const { state } = useLocation();
	const history = useHistory();

	useEffect(() => {
		if (!state) {
			history.push('/posts');
		}
	}, [state, history]);

	return <Content data={state} />;
}
