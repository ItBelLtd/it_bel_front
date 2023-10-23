'use client';
import React, { useEffect } from 'react';
import { useUser } from '@/app/stores/userStore';

import styles from './works.module.css';
import { useAuthors } from '@/app/stores/authorsStore';
import Link from 'next/link';
import { useState } from 'react';
import { News } from '@/models/News';

interface Props {
  params: {
    userId: number;
  };
}
const Works = ({ params: { userId } }: Props) => {
  const { getAuthorNews } = useAuthors((state) => ({
    getAuthorNews: state.fetchAuthorNews,
  }));
  const { getUser } = useUser((state) => ({
    getUser: state.getUserInfo,
    // info: state.aboutSomeone,
  }));
  const [arr, setArr] = useState<News[]>();
  useEffect(() => {
    getUser(userId).then((info) =>
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
            {news.title.length > 40? news.title.slice(0,60) + '...' : news.title}
          </Link>
      );
    });
    return newsList;
  };
  const newsList = arr ? renderNewsTitles(arr) : null;
  return <div className={styles.container}>{newsList}</div>;
};

export default Works;
