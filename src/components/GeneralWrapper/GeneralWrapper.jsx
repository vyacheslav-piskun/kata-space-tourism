import React from 'react';

import { useLocation } from '@gatsbyjs/reach-router';

import * as styles from './GeneralWrapper.module.scss';

const GeneralWrapper = ({children}) => {
	const location = useLocation();
	console.log(location);
	return (
		<div className={styles.wrapper}>
			{children}
		</div>
	);
};

export default GeneralWrapper;
