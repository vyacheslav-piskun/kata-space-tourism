import cx from 'classnames';
import React, {memo, useState} from 'react';

import logoIcon from '../../assets/shared/logo.svg';

import * as styles from './Header.module.scss';

const Header = ({ className = '', opened = false, setOpened =(_) => {} }) => {
	const [animated, setAnimated] = useState(false);

	const toggleMenu = () => {
		setOpened(prev => !prev);
		if(!animated) {
			setAnimated(true)
		}
	};

	return (
		<div className={cx(styles.wrapper, className)}>
			<img src={logoIcon} alt="logo" className={styles.logo}/>
			<button
				type="button"
				className={cx(styles.burgerMenu, {
					[styles.opened]: opened,
					[styles.animated]: animated,
				})}
				onClick={toggleMenu}
			>
				<span />
				<span />
				<span />
			</button>
		</div>
	);
};

export default memo(Header);
