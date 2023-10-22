'use client';
import { useUser } from '@/app/stores/userStore';
import React, { useEffect, useState } from 'react';
import { roboto_mono } from '@/app/fonts';
import { authorTabs, userTabs } from '@/data/Tabs';
import { Tabs } from '@/models/Tabs';
import { usePathname } from 'next/navigation';
import styles from '../../myProfile/layout.module.css';
import AuthorCard from '@/components/AuthorCard';
import Link from 'next/link';
import Button from '@/components/Button/Button';
import { useAuthors } from '@/app/stores/authorsStore';

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
  const { follow, unfollow } = useAuthors((state) => ({
    follow: state.followAuthor,
    unfollow: state.unfollowAuthor,
  }));
  const pathname = usePathname();
  useEffect(() => {
    getUser(userId);
  }, []);
  const [active, setActive] = useState<number>(0);
  const renderTabs = (data: Tabs[]) => {
    const tabs = data.map((link, id) => {
      const isActive = pathname.split('/')[4] == link.href.slice(19);
      if (link.href.slice(19) !== 'editProfile') {
        return (
          <Link
            key={id}
            href={`/profile/${info.username}/${userId}/${link.href.slice(19)}`}
            className={`${styles.tab} ${isActive ? styles.active : ''}`}
            onClick={() => setActive(id)}
          >
            {link.title}
          </Link>
        );
      }
      return;
    });

    return <>{tabs}</>;
  };

  const tabs = renderTabs(info.as_author ? authorTabs : userTabs);
  const handleUnfollowEvent = () => {};
  return (
    <div className={styles.container}>
      <div>
        <AuthorCard info={info} />
        {info.as_author === null ? null : (
          <Button
            className={styles.button}
            type='button'
            text='Unfollow'
            clickHandler={handleUnfollowEvent}
          />
        )}
      </div>
      <div className={styles.wrapper}>
        <div className={`${styles.tabs} ${roboto_mono.className}`}>{tabs}</div>
        <div className={styles.tabContent}>{children}</div>
      </div>
    </div>
  );
};
export default RootLayout;
