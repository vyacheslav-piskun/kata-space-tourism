import React from 'react';
import {Link} from "gatsby";

import {FONT_TYPES, Typography} from "../../Typography";

import bgImage from "../../../assets/home/background-home-mobile.webp";

import * as styles from './Home.module.scss';

const Home = () => {
	return (
		<div className={styles.wrapper}>
			<img src={bgImage} alt="planet" className={styles.bgImage}/>
			<div className={styles.container}>
				<p className={styles.headline}>
					<Typography type={FONT_TYPES.text_preset_6} center className={styles.headlineIntro}>
						SO, YOU WANT TO TRAVEL TO
					</Typography>
					<Typography type={FONT_TYPES.text_preset_1} center className={styles.headlineDestination}>SPACE</Typography>
				</p>
				<Typography type={FONT_TYPES.text_preset_9} htmlTag="p" center className={styles.description}>
					Let’s face it; if you want to go to space, you might as well genuinely go to
					outer space and not hover kind of on the edge of it. Well sit back, and relax because
					we’ll give you a truly out of this world experience!
				</Typography>
				<div className={styles.linkWrapper}>
					<Link to="/destination" className={styles.link}>
						<Typography type={FONT_TYPES.text_preset_4} className={styles.linkText}>
							explore
						</Typography>
					</Link>
				</div>
			</div>
		</div>

	);
};

export default Home;
