import React from 'react';
import { Link } from 'gatsby';

import GeneralWrapper from "../components/GeneralWrapper";

const DestinationPage = () => (
	<GeneralWrapper>
		<h1>Destination Page</h1>
		<br />
		<br />
		<Link to="/">
			<button>Go to Home</button>
		</Link>
	</GeneralWrapper>
);

DestinationPage.path = '/destination'

export default DestinationPage;
