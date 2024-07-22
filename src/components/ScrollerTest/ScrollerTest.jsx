import React, {useEffect, useRef} from 'react';

import * as styles from './ScrollerTest.module.scss';

const ScrollerTest = () => {
  const itemsRef = useRef([]);
  const wrapperRef = useRef(null);

  const handleScroll = (e) => {
    const wrapper =  wrapperRef.current;
    const items = itemsRef.current;
    console.clear();
    console.log('wrapper.scroll', wrapper.scrollTop);
    items.forEach((item, i) => {
      console.log(i, '->', item.offsetTop, item.offsetHeight)
    })
  };

  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      wrapperRef?.current?.removeEventListener('scroll', handleScroll);
    }
  }, []);

	return (
		<div className={styles.wrapper} ref={wrapperRef}>
      <div className={styles.wrapper} ref={wrapperRef}>
        <div className={styles.item} ref={el => itemsRef.current[0] = el}>Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Architecto asperiores dolore enim ex excepturi impedit ipsum magnam nostrum obcaecati
          pariatur placeat praesentium, quas quo recusandae tempora ut veniam, vitae voluptas. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Quasi, tenetur! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Doloribus ipsam laudantium libero repudiandae. Accusamus aliquid corporis cumque eligendi ratione similique.
        </div>
        <div className={styles.item} ref={el => itemsRef.current[1] = el}>Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Eos, magni. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ipsam
          laudantium libero repudiandae. Accusamus aliquid corporis cumque eligendi ratione similique.
        </div>
        <div className={styles.item} ref={el => itemsRef.current[2] = el}>Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Exercitationem, hic. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
          ipsam laudantium libero repudiandae. Accusamus aliquid corporis cumque eligendi ratione similique.
        </div>
        <div className={styles.item} ref={el => itemsRef.current[3] = el}>Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Cum, error. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ipsam
          laudantium libero repudiandae. Accusamus aliquid corporis cumque eligendi ratione similique.
        </div>
        <div className={styles.item} ref={el => itemsRef.current[4] = el}>Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Aliquid, et. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ipsam
          laudantium libero repudiandae. Accusamus aliquid corporis cumque eligendi ratione similique.
        </div>
        <div className={styles.item} ref={el => itemsRef.current[5] = el}>Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Fugit, velit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ipsam
          laudantium libero repudiandae. Accusamus aliquid corporis cumque eligendi ratione similique.
        </div>
        <div className={styles.item} ref={el => itemsRef.current[6] = el}>Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Dolor, earum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ipsam
          laudantium libero repudiandae. Accusamus aliquid corporis cumque eligendi ratione similique.
        </div>
      </div>
    </div>
  );
};

export default ScrollerTest;
