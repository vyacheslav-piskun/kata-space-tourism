import React from 'react';
import cx from 'classnames';

import * as styles from './Header.module.scss';

const Header = ({ className = '' }) => {
	return (
		<div className={cx(styles.wrapper, className)}>
			<div>Header Component</div>
		</div>
	);
};

export default Header;
