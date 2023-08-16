import Image from 'next/image';
import Link from 'next/link';
import styles from './header.module.css';
import Input from '@/components/Input/Input';

const auth: Boolean = true;

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
          <Link href='/author' className={styles.link}>
            Авторы
          </Link>
          {!auth ? (
            <div className={styles.linksAuth}>
              <Link href='/publish' className={styles.link}>
                Сделать публикацию
              </Link>
              <Link href='/author'>
                <Image
                  src='/userAvatar.jpg'
                  width={40}
                  height={40}
                  className={styles.avatar}
                  alt='user avatar'
                />
              </Link>
            </div>
          ) : (
            <div className={styles.linksAuth}>
              <Link href='/signup' className={styles.link}>
                Регистрация
              </Link>
              <Link href='/signin' className={styles.link}>
                Вход
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
