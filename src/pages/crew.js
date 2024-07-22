import React from 'react';
import { Link } from 'gatsby';

import GeneralWrapper from "../components/GeneralWrapper";

const CrewPage = () => (
	<GeneralWrapper>
		<h1>Crew Page</h1>
		<br />
		<br />
		<Link to="/">
			<button>Go to Home</button>
		</Link>
	</GeneralWrapper>
);

CrewPage.path = '/crew'

export default CrewPage;
