import React from 'react';
import {useLocation} from "@gatsbyjs/reach-router";
import {withPrefix} from "gatsby";
import {animated, useTransition} from "@react-spring/web";
import GeneralWrapper from "../GeneralWrapper";
import * as styles from "../Layout/Layout.module.scss";
import Destination from "../routes/Destination";

const TestLayout = ({ children }) => {
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
		<GeneralWrapper>
			<Destination>
				{transitions((style, item) => (
					<animated.div style={style} className={styles.wrapper}>
						{item}
					</animated.div>
				))}
			</Destination>
		</GeneralWrapper>
	);
};

export default TestLayout;