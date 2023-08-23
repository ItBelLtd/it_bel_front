import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import styles from './news.module.css';
import { roboto_mono } from '@/app/fonts';

type props = {
  id?: number,
  title?: string,
  date?: string,
  description?: string,
  img?: string
};

const News: React.FC<props> = ({ id, title, date, description, img }: props): React.JSX.Element => {
  return (
    <Link href={`news/${String(id)}`}>
      <div className={styles.recNews}>
        <div className={styles.text}>
          <h3 className={`${styles.title} + ${roboto_mono.className}`}>
            {title || 'Заголовка нет'}
          </h3>
          <h4 className={styles.date}>{date || 'Дата добавления не известна'}</h4>
          <p className={styles.dscr}>{description || 'Описание пока не придумали...'}</p>
        </div>
        <Image
          src={img || 'https://farm2.staticflickr.com/1949/45717354341_a8dc471d63_b.jpg'}
          width={350}
          height={240}
          className={styles.img}
          alt='Image'
        />
      </div>
    </Link>
  );
};

export default News;