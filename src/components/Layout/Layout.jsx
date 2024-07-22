import React from 'react';
import { useTransition, animated } from '@react-spring/web';
import { useLocation } from '@gatsbyjs/reach-router';
import {withPrefix} from "gatsby";

const Layout = ({ children }) => {
	const location = useLocation();

	const childrenArray = React.Children.toArray(children);
	const currentChild = childrenArray.find(child => {
		
		console.log('path ->', child.props.path);
		console.log('location.pathname', location.pathname);
		console.log('withPrefix(location.pathname)', withPrefix(location.pathname));
		
		return withPrefix(child.props.path) === location.pathname
	});

	const transitions = useTransition(currentChild, {
		keys: location.pathname,
		from: { opacity: 0, position: 'absolute' },
		enter: { opacity: 1, position: 'absolute' },
		leave: { opacity: 0, position: 'absolute' },
		config: { duration: 300 },
	});


	return (
		<>
			{transitions((style, item) => (
				<animated.div style={style}>
					{item}
				</animated.div>
			))}
		</>
	);
};

export default Layout;
