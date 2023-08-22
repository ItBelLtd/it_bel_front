'use client';
import { anonymousLinks, authorLinks, userLinks } from '@/data/Inputs';
import { useAuth } from '@/app/stores/authStore';
import { usePathname } from 'next/navigation';
import { Links } from '@/models/Links';
import { getCookie } from '@/helpers/cookie';
import { useUser } from '@/app/stores/userStore';
import { useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import styles from './links.module.css';

const NavLinks = () => {
  const { logout } = useAuth((state) => ({
    logout: state.logout,
  }));
  const { getUserProfile, authorId } = useUser((state) => ({
    getUserProfile: state.getUserProfile,
    authorId: state.info.as_author?.author_id,
  }));
  const token = getCookie('userToken');
  const pathname = usePathname();
  useEffect(() => {
    getUserProfile();
  }, [token]);

  function LinksRender(data: Links[]) {
    const listLinks = data.map((link: Links) => {
      const isActive = pathname === link.href;
      return (
        <Link
          onClick={() => {
            link.label === 'Выход' ? logout('auth/token/logout/') : null;
          }}
          className={isActive ? styles.active : styles.link}
          key={link.label}
          href={link.href}
        >
          {link.label}
        </Link>
      );
    });
    return listLinks;
  }

  const links = LinksRender(
    token == '' ? anonymousLinks : authorId == null ? userLinks : authorLinks,
  );

  return (
    <>
      {token == '' ? (
        links
      ) : (
        <>
          {links}
          <Link href='/profile'>
            <Image
              src='/userAvatar.jpg'
              width={40}
              height={40}
              className={styles.avatar}
              alt='user avatar'
            />
          </Link>
        </>
      )}
    </>
  );
};
export default NavLinks;
