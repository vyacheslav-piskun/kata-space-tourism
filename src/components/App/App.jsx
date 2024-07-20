import React from 'react';

import {FONT_TYPES, Typography} from "../Typography";

import * as styles from './App.module.scss';

const App = () => {

	return (
		<div className={styles.wrapper}>
			<Typography type={FONT_TYPES.text_preset_1} htmlTag="p" center>Lorem</Typography>
			<Typography type={FONT_TYPES.text_preset_2} htmlTag="p" center>Lorem</Typography>
			<Typography type={FONT_TYPES.text_preset_3} htmlTag="p" center>Lorem ipsum dolor</Typography>
			<Typography type={FONT_TYPES.text_preset_4} htmlTag="p" center>Lorem ipsum dolor sit amet.</Typography>
			<Typography type={FONT_TYPES.text_preset_6} htmlTag="p" center>Lorem ipsum dolor sit amet.</Typography>
			<Typography type={FONT_TYPES.text_preset_8} htmlTag="p" center>Lorem ipsum dolor sit amet.</Typography>
			<Typography type={FONT_TYPES.text_preset_9} htmlTag="p" center>Lorem ipsum dolor sit amet.</Typography>
		</div>
	);
};

export default App;
