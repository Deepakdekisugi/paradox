import styled from 'styled-components';
import { Button } from 'components';

export default function ElectionBanner() {
	return (
		<Banner>
			<p>
				Polling for Board of Directors 2021 is in progress. Cast you vote before 7th April, 7:00 PM
				IST.
			</p>
			<Button component='link' to='/vote'>
				Cast your vote {'->'}
			</Button>
		</Banner>
	);
}

const Banner = styled.div`
	padding: 4rem;
	background-color: ${props => props.theme.slate};
	color: ${props => props.theme.white};

	p {
		margin-bottom: 1.4rem;
	}
`;
