import React, {useState} from 'react';
import cx from 'classnames';

import logoIcon from '../../assets/shared/logo.svg';

import * as styles from './Header.module.scss';

const Header = ({ className = '' }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={cx(styles.wrapper, className)}>
			<img src={logoIcon} alt="logo" className={styles.logo}/>
			<button type="button" className={cx(styles.burgerMenu, {[styles.open]: isOpen})} onClick={toggleMenu}>
				<span />
				<span />
				<span />
			</button>
		</div>
	);
};

export default Header;
