'use client';
import { useEffect, useState } from 'react';
import someNews from '@/data/News';
import { News } from '@/models/News';
import styles from './news.module.css';
import { roboto_mono } from '@/app/fonts';
import Image from 'next/image';
import Link from 'next/link';
import { Comment } from '@/models/Comment';
import CommentComp from '@/components/Comment';
import { useMarvelService } from '@/services/services';


export default function Page({ params }: { params: { id: string } }) {
  const { getAllNews } = useMarvelService();
  const [newsData, setData] = useState<News>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    setData(someNews.find((news) => news.id === parseInt(params.id)));
    setIsLoading(true);
    getAllNews();
  }, []);
  return (
    <div>
      {isLoading ? (
        <div className='news'>
          <div
            className={styles.topPart}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${newsData?.img})`,
            }}
          >
            <div className={styles.container}>
              <h1 className={`${styles.title} + ${roboto_mono.className}`}>
                {newsData?.title}
              </h1>
              <Link href={`/${newsData?.authorName}`}>
                <div className={styles.author}>
                  <Image
                    className={styles.authorImg}
                    src={'/userAvatar.jpg'}
                    width={30}
                    height={30}
                    alt={'img'}
                  />
                  <p className={styles.authorName}>{newsData?.authorName}</p>
                </div>
              </Link>
              <hr className={styles.hr} />
              <div className={styles.underlinePart}>
                <p className={styles.date}>{newsData?.date}</p>
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
              <p>{newsData?.dscr}</p>
            </div>

            <div className={styles.commentBlock}>
              <div className={styles.abovePart}>
                <p>{newsData?.date}</p>
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
                {newsData?.comments.map((comment: Comment) => {
                  return (
                    <CommentComp comment={comment} key={comment.comment_id} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Загрузка данных</div>
      )}
    </div>
  );
}
