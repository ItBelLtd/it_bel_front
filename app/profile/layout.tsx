'use client';
import { useUser } from '@/app/stores/userStore';
import React, { useEffect, useState } from 'react';
import AuthorCard from '@/components/AuthorCard';
import Link from 'next/link';
import { roboto_mono } from '@/app/fonts';

import styles from './layout.module.css';

const links = [
  {
    href: '',
    title: 'Об авторе',
  },
  {
    href: 'works',
    title: 'Работы',
  },
  {
    href: 'contacts',
    title: 'Контакты',
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { getUserProfile, info } = useUser((state) => ({
    getUserProfile: state.getUserProfile,
    info: state.info,
  }));
  useEffect(() => {
    getUserProfile();
  });
  const [active, setActive] = useState<number>(0);
  return (
    <div className={styles.container}>
      <AuthorCard info={info} />
      <div className={styles.wrapper}>
        <div className={`${styles.tabs} ${roboto_mono.className}`}>
          {links.map((link, id) => (
            <Link
              href={`/profile/${link.href}`}
              className={`${styles.tab} ${active == id ? styles.active : ''}`}
              onClick={() => setActive(id)}
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className={styles.tabContent}>{children}</div>
      </div>
    </div>
  );
}
