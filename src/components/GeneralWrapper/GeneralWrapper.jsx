import React from 'react';

import * as styles from './GeneralWrapper.module.scss';

const GeneralWrapper = ({children}) => {
	return (
		<div className={styles.wrapper}>
			{children}
		</div>
	);
};

export default GeneralWrapper;
