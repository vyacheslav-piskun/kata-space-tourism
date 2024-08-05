import cx from 'classnames';
import React, {memo} from 'react';
import {Link, withPrefix} from "gatsby";
import {useLocation} from "@gatsbyjs/reach-router";
import { useTransition, animated, easings } from '@react-spring/web';

import {FONT_TYPES, Typography} from "../Typography";

import * as styles from './NavMenu.module.scss';

const NAV_CONFIG = [
	{
		route: '/',
		routeText: 'Home'
	},
	{
		route: '/destination/moon/',
		routeText: 'Destination',
	},
	{
		route: '/destination/europa/',
		routeText: 'Destination - Europa'
	},
	{
		route: '/crew/',
		routeText: 'Crew'
	},
	{
		route: '/technology/',
		routeText: 'Technology'
	},
]

const NavMenu = ({ opened= false, onClose = () => {} }) => {
	const { pathname } = useLocation();

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
					<ul className={styles.navList}>
						{NAV_CONFIG.map(({id, route, routeText}, index) => (
							<li key={route}>
								<Link
									onClick={onClose}
									to={route}
									className={cx(
										styles.navLink,
										{[styles.active]: pathname === withPrefix(route)}
									)}
								>
									<Typography
										type={FONT_TYPES.text_preset_8_second_bold}
										className={styles.navNum}
									>
										{`0${index}`}
									</Typography>
									<Typography type={FONT_TYPES.text_preset_8_second}>
										{routeText}
									</Typography>
								</Link>
							</li>
						))}
					</ul>
				</animated.nav>
			)
	);
};

export default memo(NavMenu);
