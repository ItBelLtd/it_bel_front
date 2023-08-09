'use client';
import { useEffect } from 'react';
import { useNews } from '@/app/stores/storeNews';
import { merriweather_sans, roboto_mono } from '@/app/fonts';
import someNews from '@/data/News';
import { News } from '@/models/News';
import Image from 'next/image';
import styles from './PopularNews.module.css';
import { calculateSizeAdjustValues } from 'next/dist/server/font-utils';
import Link from 'next/link';

const PopularNews = () => {
  const { fetchPopularNews, popularNews } = useNews((state) => ({
    fetchPopularNews: state.fetchPopularNews,
    popularNews: state.popularNews,
  }));

  useEffect(() => {
    fetchPopularNews();
  }, []);

  return (
    <div className={styles.container}>
      {someNews.map((news: News) => {
        return (
          <Link href={`news/${String(news.id)}`} key={news.id}>
            <div className={styles.recNews}>
              <div className={styles.text}>
                <h3 className={`${styles.title} + ${roboto_mono.className}`}>
                  {news.title}
                </h3>
                <h4 className={styles.date}>{news.date}</h4>
                <p className={styles.dscr}>{news.dscr}</p>
              </div>
              <Image
                src={news.img}
                width={350}
                height={240}
                className={styles.img}
                alt='Image'
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default PopularNews;
