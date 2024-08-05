import React from 'react';

import Destination from "../components/routes/Destination";
import PlanetInfo from "../components/PlanetInfo";

const DestinationPage = ({ pageContext }) => {
	const { destination: planetInfo } = pageContext;

	if (!planetInfo) {
		return <div>Loading...</div>;
	}

	return (
		<Destination>
			<PlanetInfo  planetInfo={planetInfo}/>
		</Destination>
	);
};

export default DestinationPage;
