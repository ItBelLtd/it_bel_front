import Link from 'next/link';
import styles from './signup.module.css';
import { merriweather_sans, roboto_mono } from '@/app/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <h3 className={`${styles.title} + ${roboto_mono.className}`}>
        Регистрация
      </h3>
      <div className={styles.tabs}>
        <Link href='/signup'>Пользователь</Link>
        <Link href='/signup/signupAuthor'>Автор</Link>
      </div>
      {children}
      <Link href='' className={styles.link}>
        Есть аккаунт? Войти
      </Link>
    </div>
  );
}
