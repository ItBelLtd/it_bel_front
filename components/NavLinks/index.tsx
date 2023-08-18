'use client';
import { anonymousLinks, authorLinks, userLinks } from '@/data/Inputs';
import { useAuth } from '@/app/stores/authStore';
import { useAuthors } from '@/app/stores/authorsStore';
import { usePathname } from 'next/navigation';
import { Links } from '@/models/Links';

import Image from 'next/image';
import Link from 'next/link';
import styles from './links.module.css';

const NavLinks = () => {
  const { token, logout } = useAuth((state) => ({
    token: state.token,
    logout: state.logout,
  }));

  const { authorId } = useAuthors((state) => ({
    authorId: state.author?.author_id,
  }));

  const pathname = usePathname();

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
          <Link href='/author'>
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
