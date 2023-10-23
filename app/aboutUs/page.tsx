import Link from 'next/link';
import styles from '../privacyPolicy/page.module.css';
import { roboto_mono } from '@/app/fonts';
const AboutUs = () => {
  return (
    <div className={`${roboto_mono.className}`}>
      <h2 className={styles.title}>О нас</h2>
      <p className={styles.aboutUs}>
        Наш проект - это не просто еще один новостной сайт. Мы создаем
        уникальную платформу, где каждый может стать автором и делиться
        захватывающими новостями из мира IT. Нет необходимости быть частью
        редакции, просто зарегистрируйтесь в качестве автора и пройдите
        модерацию. У нас всегда есть место для новых голосов и интересных
        новостей.
      </p>
      <hr></hr>
      <h3>Наша команда:</h3>
      <ul className={styles.aboutUl}>
        <li>
          <Link
            className={styles.link}
            href='https://www.linkedin.com/in/denis-kharytonchyk-7308b3244/'
          >
            Денис Харитончик (Founder)
          </Link>
        </li>
        <li>
          <Link className={styles.link} href='https://github.com/Demianight'>
            Демьян (Back-lead)
          </Link>
        </li>
        <li>
          <Link
            className={styles.link}
            href='https://www.linkedin.com/in/egordovgvillo/'
          >
            Егор Довгвилло (Front-lead)
          </Link>
        </li>
        <li>
          <Link className={styles.link} href='https://github.com/SerezhaK'>
            Сергей Кожевников (Backend developer)
          </Link>
        </li>
        <li>
          <Link
            className={styles.link}
            href='https://github.com/EgorZaprivarin'
          >
            Егор Заприварин (Frontend developer)
          </Link>
        </li>
        <li>
          <Link className={styles.link} href='https://github.com/SerezhaK'>
            Дмитрий Мурзин (Backend developer)
          </Link>
        </li>
        <li>
          <Link className={styles.link} href='https://github.com/Vadimcha'>
            Белов Вадим (Frontend developer, UX/UI designer)
          </Link>
        </li>
      </ul>
      <h2 className={styles.title}>Контакты</h2>
      <hr></hr>
      <ul className={styles.aboutUl}>
        <li>
          <Link
            className={styles.link}
            href='https://www.linkedin.com/company/it-bel-ltd/mycompany/'
          >
            LinkedIn
          </Link>
        </li>
        <li>
          <Link className={styles.link} href='itbel.startup@gmail.com'>
            Электронная почта
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default AboutUs;
