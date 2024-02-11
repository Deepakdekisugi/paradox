import { useEffect, useState } from 'react';
import styled from 'styled-components';

import AboutCard from './AboutCard';

export default function TeamContainer({ title, data, handleClick }) {
	const [list, setList] = useState(data);

	useEffect(() => {
		if (title === 'Technical Team') {
			for (let i = data.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[data[i], data[j]] = [data[j], data[i]];
			}
			setList([...data]);
		}
	}, [title, data]);

	return (
		<Container>
			{list?.map(
				({ id, name, profile, designation, year, tag, socialLinks, role, fromBenxene }) => {
					return (
						<AboutCard
							key={name}
							id={id}
							name={name}
							profile={profile}
							designation={designation}
							year={year}
							tag={tag}
							socialLinks={socialLinks}
							handleClick={handleClick}
							role={role}
							fromBenxene={fromBenxene}
						/>
					);
				}
			)}
		</Container>
	);
}

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 2.5rem;

	@media only screen and (max-width: 1200px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;
