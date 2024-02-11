import { Heading, Footer } from 'components';
import TeamDetails from './TeamDetails';
import details from 'data/members';

export default function About() {
	return (
		<>
			<Heading gradient margin='huge'>
				About Us
			</Heading>
			{details.map(({ title, data }, ind) => {
				return <TeamDetails title={title} data={data} key={ind} />;
			})}
			<Footer />
		</>
	);
}
