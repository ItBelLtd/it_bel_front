'use client';
import styles from './works.module.css';
import React, { useEffect, useState } from 'react';
import { useUser } from '@/app/stores/userStore';
import { News } from '@/models/News';
import { useAuthors } from '@/app/stores/authorsStore';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import { useNews } from '@/app/stores/newsStore';
import { useRouter } from 'next/navigation';
const Works = () => {
  const { getAuthorNews } = useAuthors((state) => ({
    getAuthorNews: state.fetchAuthorNews,
  }));
  const { getInfo } = useUser((state) => ({
    getInfo: state.getUserProfile,
  }));
  const { deleteNews } = useNews((state) => ({
    deleteNews: state.deleteNews,
  }));
  const [arr, setArr] = useState<News[]>();
  useEffect(() => {
    getInfo().then((info) =>
      getAuthorNews(info.as_author.author_id).then((res) => setArr(res)),
    );
  }, []);
  const router = useRouter();
  const renderNewsTitles = (data: News[]) => {
    const newsList = data.map((news) => {
      return (
        <div className={styles.linkWrap}>
          <Link
            key={news.news_id}
            className={styles.newsTitle}
            href={`/news/${news.news_id}`}
          >
            {news.title}
          </Link>
          <FontAwesomeIcon
            icon={faTrash}
            shake
            size='2xl'
            style={{ color: '#00508c' }}
            onClick={() => {
              router.refresh();
              router.push('/profile/myProfile/works');
              deleteNews(news.news_id);
            }}
          />
          <FontAwesomeIcon
            icon={faPen}
            shake
            size='2xl'
            style={{ color: '#00508c' }}
          />
        </div>
      );
    });
    return newsList;
  };
  const newsList = arr ? renderNewsTitles(arr) : null;
  return <div className={styles.container}>{newsList}</div>;
};

export default Works;
