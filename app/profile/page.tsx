'use client';
import { NextPage } from 'next';
import AuthorCard from '@/components/AuthorCard';
import Tabs from '@/components/Tabs';
import styles from './profile.module.css';
import { useEffect } from 'react';
import { useUser } from '@/app/stores/userStore';

const Profile: NextPage = () => {
  const { getUserProfile, info } = useUser((state) => ({
    getUserProfile: state.getUserProfile,
    info: state.info,
  }));
  useEffect(() => {
    getUserProfile();
  });
  return (
    <div className={styles.container}>
      <AuthorCard info={info} />
      <Tabs info={info} />
    </div>
  );
};

export default Profile;
