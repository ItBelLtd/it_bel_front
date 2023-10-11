'use client';
import { useUser } from '@/app/stores/userStore';
import React, { useEffect, useState } from 'react';
import { roboto_mono } from '@/app/fonts';
import { authorTabs, userTabs } from '@/data/Tabs';
import { Tabs } from '@/models/Tabs';

import styles from './layout.module.css';
import AuthorCard from '@/components/AuthorCard';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  params: {
    page: string;
  };
  children: React.ReactNode;
}

export default function RootLayout({ params: { page }, children }: Props) {
  const { getUserProfile, info } = useUser((state) => ({
    getUserProfile: state.getUserProfile,
    info: state.info,
  }));
  const pathname = usePathname();
  console.log(1);
  useEffect(() => {
    getUserProfile();
  }, []);
  const [active, setActive] = useState<number>(0);
  const renderTabs = (data: Tabs[]) => {
    const tabs = data.map((link, id) => {
      const isActive = pathname === link.href;

      return (
        <Link
          key={id}
          href={`${link.href}/`}
          className={`${styles.tab} ${isActive ? styles.active : ''}`}
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
}
