import React from 'react';

import Layout from './src/components/Layout';

import "./src/styles/global.scss";

export const wrapPageElement = ({ element, props }) => {
	// if (props.path.startsWith('/test_route')) {
	// 	return <TestLayout {...props}>{element}</TestLayout>;
	// }

	return <Layout {...props}>{element}</Layout>;
};
