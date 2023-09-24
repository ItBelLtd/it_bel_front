'use client';
import { useUser } from '@/app/stores/userStore';
import React, { useEffect, useState } from 'react';
import { roboto_mono } from '@/app/fonts';
import { authorTabs, userTabs } from '@/data/Tabs';
import { Tabs } from '@/models/Tabs';

import styles from '../../myProfile/layout.module.css';
import AuthorCard from '@/components/AuthorCard';
import Link from 'next/link';

interface Props {
  params: {
    userId: number;
  };
  children: React.ReactNode;
}
const RootLayout = ({ params: { userId }, children }: Props) => {
  const { getUser, info } = useUser((state) => ({
    getUser: state.getUserInfo,
    info: state.aboutSomeone,
  }));

  useEffect(() => {
    getUser(userId);
  }, []);

  const [active, setActive] = useState<number>(0);
  const renderTabs = (data: Tabs[]) => {
    const tabs = data.map((link, id) => {
      return (
        <Link
          key={id}
          href={`/profile/${info.username}/${userId}/${link.href}`}
          className={`${styles.tab} ${active == id ? styles.active : ''}`}
          onClick={() => setActive(id)}
        >
          {link.title}
        </Link>
      );
    });
    return <>{tabs}</>;
  };

  const tabs = renderTabs(info.as_author ? authorTabs : userTabs);

  return (
    <div className={styles.container}>
      <AuthorCard info={info} />
      <div className={styles.wrapper}>
        <div className={`${styles.tabs} ${roboto_mono.className}`}>{tabs}</div>
        <div className={styles.tabContent}>{children}</div>
      </div>
    </div>
  );
};
export default RootLayout;
