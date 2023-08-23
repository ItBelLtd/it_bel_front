'use client';
import { useEffect } from 'react';
import { useNews } from '@/app/stores/newsStore';

import News from '@/components/News/News';
import { News as ModelNews } from '@/models/News';
// import { merriweather_sans, ro/boto_mono } from '@/app/fonts';

import styles from './PopularNews.module.css';

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
      {popularNews.map((news: ModelNews) => {
        return (
          <News key={news.news_id} {...news}/>
        );
      })}
    </div>
  );
};

export default PopularNews;
