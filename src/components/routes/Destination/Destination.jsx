import React from 'react';

import {FONT_TYPES, Typography} from "../../Typography";

import bgImage from "../../../assets/destination/background-destination-mobile.webp";

import * as styles from './Destination.module.scss';

const Destination = ({children}) => {
  return (
    <div className={styles.wrapper}>
      <img src={bgImage} alt="planet" className={styles.bgImage}/>
      <div className={styles.container}>
        {children}
        {/*<p className={styles.headline}>*/}
        {/*  <Typography type={FONT_TYPES.text_preset_1} center className={styles.headlineDestination}>404</Typography>*/}
        {/*</p>*/}
        {/*<Typography type={FONT_TYPES.text_preset_9} htmlTag="p" center className={styles.description}>*/}
        {/*  The Information Will Be Soon*/}
        {/*</Typography>*/}
      </div>
    </div>
  );
};

export default Destination;
