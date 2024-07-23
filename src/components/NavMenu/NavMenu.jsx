import {Link} from "gatsby";
import React, {memo} from 'react';
import { useTransition, animated, easings } from '@react-spring/web';

import {FONT_TYPES, Typography} from "../Typography";

import * as styles from './NavMenu.module.scss';

const NavMenu = ({ opened= false }) => {
	const transitions = useTransition(opened, {
		from: { transform: 'translateX(120%)'},
		enter: { transform: 'translateX(0%)'},
		leave: { transform: 'translateX(120%)'},
		config: { duration: 1200, easing: easings.easeOutExpo },
	});

	return transitions(
		(style, item) =>
			item && (
				<animated.nav style={style} className={styles.wrapper}>
					<ul className={ styles.navList}>
						<Typography type={FONT_TYPES.text_preset_8} htmlTag="li" className={styles.navItem}>
							<Link to='/destination' className={styles.navLink}>Destination</Link>
						</Typography>
						<Typography type={FONT_TYPES.text_preset_8} htmlTag="li" className={styles.navItem}>
							<Link to='/crew' className={styles.navLink}>Crew</Link>
						</Typography>
						<Typography type={FONT_TYPES.text_preset_8} htmlTag="li" className={styles.navItem}>
							<Link to='/technology' className={styles.navLink}>Technology</Link>
						</Typography>
					</ul>
				</animated.nav>
			)
	);
};

export default memo(NavMenu);
