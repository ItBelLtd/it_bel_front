'use client';
import { useEffect } from 'react';
import { useNews } from '@/app/stores/newsStore';

import News from '@/components/News/News';
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
      <News dataNews={popularNews} width={260} height={177} />;
    </div>
  );
};

export default PopularNews;
