'use client';
import React, { useEffect } from 'react';
import { useUser } from '@/app/stores/userStore';
import { roboto_mono } from '@/app/fonts';

import styles from './works.module.css';
import { useAuthors } from '@/app/stores/authorsStore';
import Link from 'next/link';

interface Props {
  params: {
    userId: number;
  };
}
const Works = ({ params: { userId } }: Props) => {
  const { authorNews, getAuthorNews } = useAuthors((state) => ({
    getAuthorNews: state.fetchAuthorNews,
    authorNews: state.authorNews,
  }));
  const { getUser, info } = useUser((state) => ({
    getUser: state.getUserInfo,
    info: state.aboutSomeone,
  }));
  useEffect(() => {
    getUser(userId);
    getAuthorNews(info.as_author.author_id);
  }, [info.as_author.author_id]);
  const renderNewsTitles = () => {
    const newsList = authorNews.map((news) => {
      return <Link href={`/news/${news.news_id}`}>{news.title}</Link>;
    });
    return newsList;
  };
  const newsList = renderNewsTitles();
  return <div className={styles.container}>{newsList}</div>;
};

export default Works;
