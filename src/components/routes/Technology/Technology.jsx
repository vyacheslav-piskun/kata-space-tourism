import React from 'react';

import {FONT_TYPES, Typography} from "../../Typography";

import bgImage from "../../../assets/technology/background-technology-mobile.webp";

import * as styles from './Technology.module.scss';

const Technology = () => {
  return (
    <div className={styles.wrapper}>
      <img src={bgImage} alt="planet" className={styles.bgImage}/>
      <div className={styles.container}>
        <p className={styles.headline}>
          <Typography type={FONT_TYPES.text_preset_1} center className={styles.headlineDestination}>404</Typography>
        </p>
        <Typography type={FONT_TYPES.text_preset_9} htmlTag="p" center className={styles.description}>
          The Information Will Be Soon
        </Typography>
      </div>
    </div>
  );
};

export default Technology;
