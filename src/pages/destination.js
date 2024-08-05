import React from 'react';
import {withPrefix} from "gatsby";

import Destination from "../components/routes/Destination";

const DestinationPage = ({ pageContext }) => {
	const { destination } = pageContext;

	if (!destination) {
		return <div>Loading...</div>;
	}

	const {
		name, images, description, distance, travel
	} = destination

	return (
		<Destination>
			<div style={{color: "white", zIndex: 10}}>
				<h1>{name}</h1>
				<img src={withPrefix(images.webp)} alt={name}/>
				<p>{description}</p>
				<p>Distance: {distance}</p>
				<p>Travel Time: {travel}</p>
			</div>
		</Destination>
	);
};

export default DestinationPage;
