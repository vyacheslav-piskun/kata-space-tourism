import React from 'react';
import { Link } from 'gatsby';

import GeneralWrapper from "../components/GeneralWrapper";

const TechnologyPage = () => (
	<GeneralWrapper>
		<h1>Technology Page</h1>
		<br />
		<br />
		<Link to="/">
			<button>Go to Home</button>
		</Link>
	</GeneralWrapper>
);

TechnologyPage.path = '/technology'

export default TechnologyPage;
