import React from 'react';

const TestLayout = ({ children }) => {
	return (
		<div style={{color: "white"}}>
			<h1>Test Layout</h1>
			{children}
		</div>
	);
};

export default TestLayout;