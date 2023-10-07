'use client';
import styles from '../../myProfile/profile.module.css';
import React from 'react';
import { useUser } from '@/app/stores/userStore';
import { roboto_mono } from '@/app/fonts';

const Profile = () => {
  const { info } = useUser((state) => ({
    info: state.aboutSomeone,
  }));
  return (
    <div className={styles.container}>
      <span className={`${styles.name} ${roboto_mono.className}`}>
        {info.username}
      </span>
      <p className={styles.timeIntervals}>
        <span className={styles.registrationInterval}>
          Регистрация: {/*calculateTimePeriod(info.as_author.date_joined)*/}{' '}
          назад
        </span>
      </p>
      <div className={styles.bio}>
        <span className={`${styles.header} ${roboto_mono.className}`}>
          About me
        </span>
      </div>
    </div>
  );
};

export default Profile;
