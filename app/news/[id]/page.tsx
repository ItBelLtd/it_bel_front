'use client';
import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useNews } from '@/app/stores/newsStore';

import Image from 'next/image';
import Link from 'next/link';
import CommentComp from '@/components/Comment';

import { comment, news, NewsStore } from '@/models/News';

import styles from './news.module.css';
import { roboto_mono } from '@/app/fonts';

const Page = () => {
  const { id }: {id?: number} = useParams();
  const { fetchNews, news, isLoading, fetchNewsComments, newsComments } = useNews((state: NewsStore) => ({
    fetchNews: state.fetchNews,
    news: state.news,
    fetchNewsComments: state.fetchNewsComments,
    newsComments: state.newsComments,
    isLoading: state.isLoading,
  }));

  useEffect(() => {
    if (!id) {
      return;
    }

    fetchNews(id);
    fetchNewsComments(id);
  }, [id]);

  const loading = isLoading ? 'Загрузка данных' : null;
  const content = (!isLoading && news && newsComments) ? <View news={news} newsComments={newsComments} /> : null;

  return (
    <div>
      {loading}
      {content}
    </div>
  );
};

const View = ({news, newsComments}: {news: news, newsComments: Array<comment>}) => {

  return (
    <div className='news'>
      <div
        className={styles.topPart}
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://farm2.staticflickr.com/1949/45717354341_a8dc471d63_b.jpg")',
        }}
      >
        <div className={styles.container}>
          <h1 className={`${styles.title} + ${roboto_mono.className}`}>
            {news.title}
          </h1>
          <Link href={`/${news.author.name}`}>
            <div className={styles.author}>
              <Image
                className={styles.authorImg}
                src={'/userAvatar.jpg'}
                width={30}
                height={30}
                alt={'img'}
              />
              <p className={styles.authorName}>{news.author.name}</p>
            </div>
          </Link>
          <hr className={styles.hr} />
          <div className={styles.underlinePart}>
            <p className={styles.date}>{news.added.slice(0, 10).replace(/-/g, '.')}</p>
            <div className={styles.buttonGroup}>
              <button className={styles.commentsButton}>
                <Image
                  src={'/comments_icon.svg'}
                  width={24}
                  height={24}
                  alt={''}
                />
              </button>
              <button className={styles.shareButton}>
                <Image
                  src={'/share_icon.svg'}
                  width={24}
                  height={24}
                  alt={''}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <p>{news.description}</p>
        </div>

        <div className={styles.commentBlock}>
          <div className={styles.abovePart}>
            <p>{news.added.slice(0, 10).replace(/-/g, '.')}</p>
            <button className={`${styles.shareButton} + ${styles.share}`}>
              <p>Поделиться</p>
              <Image
                src={'/share_icon.svg'}
                width={24}
                height={24}
                alt={''}
              />
            </button>
          </div>
          <hr className={styles.hr} />
          <p
            className={`${styles.numberComments} + ${roboto_mono.className}`}
          >
            100+ комментариев к этой статье
          </p>
          <div className={styles.comments}>
            {newsComments.map((comment: comment) => {
              return (
                <CommentComp {...comment} key={comment.comment_id} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
