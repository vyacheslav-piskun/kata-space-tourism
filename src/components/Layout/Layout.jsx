import React from 'react';
import { useTransition, animated } from '@react-spring/web';
import { useLocation } from '@gatsbyjs/reach-router';
import {withPrefix} from "gatsby";

import * as styles from './Layout.module.scss'

const Layout = ({ children }) => {
	const location = useLocation();

	const childrenArray = React.Children.toArray(children);
	const currentChild = childrenArray.find(child => {

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
				<animated.div style={style} className={styles.wrapper}>
					{item}
				</animated.div>
			))}
		</>
	);
};

export default Layout;
