'use client';
import React, { useEffect } from 'react';
import { useUser } from '@/app/stores/userStore';
import { roboto_mono } from '@/app/fonts';

import styles from './works.module.css';

const Works = () => {
  const { info } = useUser((state) => ({
    info: state.info,
  }));
  return (
    // <div className={styles.container}>
    //   <span className={`${styles.name} ${roboto_mono.className}`}>
    //     {info.username}
    //   </span>
    //   <p className={styles.timeIntervals}>
    //     <span className={styles.registrationInterval}>
    //       Регистрация: {/*calculateTimePeriod(info.as_author.date_joined)*/}{' '}
    //       назад
    //     </span>
    //   </p>
    //   <div className={styles.bio}>
    //     <span className={`${styles.header} ${roboto_mono.className}`}>
    //       About me
    //     </span>
    //   </div>
    // </div>
    <></>
  );
};

export default Works;
