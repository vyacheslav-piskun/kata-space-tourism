import React from 'react';
import {withPrefix} from "gatsby";

const TestRouteTemplate = ({ pageContext }) => {
	const { test_route } = pageContext;

	if (!test_route) {
		return <div>Loading...</div>;
	}

	const {
		name, images, description, distance, travel
	} = test_route

	return (
		<div style={{color: "white"}}>
			<h1>{name}</h1>
			<img src={withPrefix(images.webp)} alt={name} />
			<p>{description}</p>
			<p>Distance: {distance}</p>
			<p>Travel Time: {travel}</p>
		</div>
	);
};

export default TestRouteTemplate;
