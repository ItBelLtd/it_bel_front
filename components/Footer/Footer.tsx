import styles from './footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { roboto_mono } from '@/app/fonts';
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <Link href='/'>
          <Image
            src='/it_bel.svg'
            width={100}
            height={35}
            className={styles.icon}
            alt='It_BEL logo'
          />
        </Link>

        <div className={roboto_mono.className}>
          &copy; 2024 IT_BEL. All Rights Reserved.
        </div>

        <nav className={styles.links}>
          <div className={styles.usLink}>
            <Link href='/about' className={styles.link}>
              About Us
            </Link>
            <Link href='/contact' className={styles.link}>
              Contact Us
            </Link>
          </div>
          <div className={styles.serviceLink}>
            <Link href='/service' className={styles.link}>
              Terms of Service
            </Link>
            <Link href='/policy' className={styles.link}>
              Privacy Policy
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
