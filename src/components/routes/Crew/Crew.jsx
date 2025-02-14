import React from 'react';

import {FONT_TYPES, Typography} from "../../Typography";

import bgImage from "../../../assets/crew/background-crew-mobile.webp";

import * as styles from './Crew.module.scss';

const Crew = () => {
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

export default Crew;
