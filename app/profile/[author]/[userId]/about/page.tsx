'use client';
import styles from '../../../myProfile/about/profile.module.css';
import React, { useEffect } from 'react';
import { useUser } from '@/app/stores/userStore';
import { roboto_mono } from '@/app/fonts';
interface Props {
  params: {
    userId: number;
  };
}
const Profile = ({ params: { userId } }: Props) => {
  const { info, getUser } = useUser((state) => ({
    info: state.aboutSomeone,
    getUser: state.getUserInfo,
  }));
  useEffect(() => {
    getUser(userId);
  }, []);
  return (
    <div className={styles.container}>
      <span className={`${styles.name} ${roboto_mono.className}`}>
        {info.username}
      </span>
      <p className={styles.timeIntervals}>
        <span className={styles.registrationInterval}>
          Зарегистрирован: {info.date_joined}
        </span>
      </p>
      <div className={styles.bio}>
        <span className={`${styles.header} ${roboto_mono.className}`}>
          About me:
        </span>
      </div>
    </div>
  );
};

export default Profile;
