'use client';
import styles from './works.module.css';
import React, { useEffect, useState } from 'react';
import { useUser } from '@/app/stores/userStore';
import { News } from '@/models/News';
import { useAuthors } from '@/app/stores/authorsStore';
import Link from 'next/link';

const Works = () => {
  const { getAuthorNews } = useAuthors((state) => ({
    getAuthorNews: state.fetchAuthorNews,
  }));
  const { getInfo } = useUser((state) => ({
    getInfo: state.getUserProfile,
  }));
  const [arr, setArr] = useState<News[]>();
  useEffect(() => {
    getInfo().then((info) =>
      getAuthorNews(info.as_author.author_id).then((res) => setArr(res)),
    );
  }, []);
  const renderNewsTitles = (data: News[]) => {
    const newsList = data.map((news) => {
      return (
        <Link
          key={news.news_id}
          className={styles.newsTitle}
          href={`/news/${news.news_id}`}
        >
          {news.title}
        </Link>
      );
    });
    return newsList;
  };
  const newsList = arr ? renderNewsTitles(arr) : null;
  return <div className={styles.container}>{newsList}</div>;
};

export default Works;
