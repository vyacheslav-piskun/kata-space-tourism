import cx from 'classnames';
import React, { memo } from 'react';

import * as styles from './Typography.module.scss';

export const FONT_TYPES = {
	text_preset_1: 'text_preset_1',
	text_preset_2: 'text_preset_2',
	text_preset_3: 'text_preset_3',
	text_preset_4: 'text_preset_4',
	text_preset_5: 'text_preset_5',
	text_preset_6: 'text_preset_6',
	text_preset_7: 'text_preset_7',
	text_preset_8: 'text_preset_8',
	text_preset_8_second: 'text_preset_8_second',
	text_preset_8_second_bold: 'text_preset_8_second_bold',
	text_preset_9: 'text_preset_9',
}

const Typography = ({
	center = false,
	type = FONT_TYPES.text_preset_9,
	htmlTag: HtmlTag = 'span',
	children,
	className
}) => {
	return (
		<HtmlTag className={cx(
			className,
			styles[type] || styles[FONT_TYPES.text_preset_9],
			{
				[styles.center]: center,
			})}
		>
			{children}
		</HtmlTag>
	);
};

export default memo(Typography);
