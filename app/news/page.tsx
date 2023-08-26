'use client';
import { merriweather_sans } from '@/app/fonts';
import { useEffect } from 'react';
import { useAuthors } from '@/app/stores/authorsStore';
import { useNews } from '../stores/newsStore';

import News from '@/components/News/News';
import Author from '@/components/Author';
import Input from '@/components/Input/Input';
import styles from './allNews.module.css';

const NewsPage = () => {
  const { getAuthors, allAuthors } = useAuthors((state) => ({
    getAuthors: state.fetchAllAuthors,
    allAuthors: state.allAuthors,
  }));
  const { fetchAllNews, allNews } = useNews((state) => ({
    fetchAllNews: state.fetchAllNews,
    allNews: state.allNews,
  }));
  useEffect(() => {
    getAuthors(1);
    fetchAllNews();
  }, []);
  return (
    <div className={`${styles.newsContainer} ${merriweather_sans.className}`}>
      <div className='news'>
        <h3 className={styles.title}> Все новости</h3>
        <News dataNews={allNews} width={260} height={177} />
      </div>
      <div className={styles.authors}>
        <div className={styles.wrapper}>
          <Input text='Ищите автора' width='226px' />
          <Author allAuthors={allAuthors} />
        </div>
      </div>
    </div>
  );
};
export default NewsPage;
