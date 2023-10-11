'use client';
import styles from './profile.module.css';
import React, { useEffect } from 'react';
import { useUser } from '@/app/stores/userStore';
import { roboto_mono } from '@/app/fonts';

const Profile = () => {
  const { info, getInfo } = useUser((state) => ({
    info: state.info,
    getInfo: state.getUserProfile,
  }));
  useEffect(() => {
    getInfo();
  }, []);
  return (
    <div className={styles.container}>
      <span className={`${styles.name} ${roboto_mono.className}`}>
        {info.username}
      </span>
      <p className={styles.timeIntervals}>
        <span className={styles.registrationInterval}>
          Регистрация:1 {/*calculateTimePeriod(info.as_author.date_joined)*/}{' '}
          назад
        </span>
      </p>
      <div className={styles.bio}>
        <h4 className={`${styles.header} ${roboto_mono.className}`}>
          About Me:
        </h4>
        {info.as_author.bio}
      </div>
    </div>
  );
};

export default Profile;
