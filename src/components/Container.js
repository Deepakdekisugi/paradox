import styled from 'styled-components';

export default styled.div`
	max-width: 120rem;
	margin: 8rem auto;

	@media only screen and (max-width: 120rem) {
		max-width: 90%;
		margin: 6rem auto;
	}

	@media only screen and (max-width: 600px) {
		max-width: 95%;
	}
`;
