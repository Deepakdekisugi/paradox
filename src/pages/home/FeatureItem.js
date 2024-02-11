import styled from 'styled-components';

export default function Feature({ title, para, imgSrc }) {
	return (
		<Container>
			<img alt={title} src={imgSrc} />
			<div>
				<h3>{title}</h3>
				<p>{para}</p>
			</div>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	align-items: center;

	@media only screen and (max-width: 750px) {
		flex-direction: column;
	}

	@supports (gap: 3rem) {
		gap: 6rem;

		@media only screen and (max-width: 750px) {
			gap: 3rem;
		}
	}

	@media only screen and (max-width: 750px) {
		text-align: center;

		& img {
			justify-self: center !important;
		}
	}

	@media only screen and (min-width: 750px) {
		&:nth-child(even) {
			flex-direction: row-reverse;
			img {
				justify-self: flex-start;
			}

			div {
				text-align: right;
				@supports not (gap: 3rem) {
					margin-right: 6rem;
					margin-left: 0;

					@media only screen and (max-width: 750px) {
						margin: 0;
						margin-top: 3rem;
					}
				}
			}
		}
	}

	& img {
		display: block;
		max-height: 25rem;
		justify-self: flex-end;
	}

	div {
		@supports not (gap: 3rem) {
			margin-left: 6rem;
		}
		& h3 {
			font-size: 2rem;
			margin-bottom: 1.2rem;
		}

		& p {
			line-height: 2;
		}
	}
`;
