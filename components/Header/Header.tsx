import Image from 'next/image';
import Link from 'next/link';
import styles from './header.module.css';
import Input from '@/components/Input/Input';
import NavLinks from '@/components/NavLinks';

const Header = () => {
  return (
    <header className={styles.container}>
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
        <Input />
        <nav className={styles.links}>
          <div className={styles.linksAuth}>
            <NavLinks />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
