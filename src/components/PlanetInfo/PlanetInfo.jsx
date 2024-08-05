import React from 'react';
import {withPrefix} from "gatsby";

import {FONT_TYPES, Typography} from "../Typography";

import * as styles from './PlanetInfo.module.scss';

const PlanetInfo = ({ planetInfo }) => {
  const {
    name, image, description, distance, travel
  } = planetInfo

	return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <img src={withPrefix(image)} alt={name} className={styles.image}/>
      </div>
      <Typography
        type={FONT_TYPES.text_preset_2}
        htmlTag="h2"
        center
        className={styles.title}
      >
        {name}
      </Typography>
      <Typography
        type={FONT_TYPES.text_preset_9}
        htmlTag="p"
        center
        className={styles.description}
      >
        {description}
      </Typography>
      <div className={styles.hr}/>

      <div className={styles.infoBlockWrapper}>
        <div className={styles.infoBlock}>
          <Typography
            type={FONT_TYPES.text_preset_7_second}
            center
            className={styles.infoBlockTitle}
            htmlTag="h3"
          >
            AVG. DISTANCE
          </Typography>
          <Typography
            type={FONT_TYPES.text_preset_6_second}
            center
            htmlTag="p"
            className={styles.infoBlockText}
          >
            {distance}
          </Typography>
        </div>
        <div className={styles.infoBlock}>
          <Typography
            type={FONT_TYPES.text_preset_7_second}
            center
            className={styles.infoBlockTitle}
            htmlTag="h3"
          >
            Est. travel time
          </Typography>
          <Typography
            type={FONT_TYPES.text_preset_6_second}
            center
            htmlTag="p"
            className={styles.infoBlockText}
          >
            {travel}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default PlanetInfo;
