'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import DOMPurify from 'dompurify';
import { useNews } from '@/app/stores/newsStore';
import { useUser } from '@/app/stores/userStore';
import {getCookie} from '@/services/cookie';

import Image from 'next/image';
import Link from 'next/link';
import CommentComp from '@/components/Comment';
import LikeIcon from '@/components/LikeIcon/LikeIcon';
import DislikeIcon from '@/components/DislikeIcon/DislikeIcon';
import ShareIcon from '@/components/ShareIcon/ShareIcon';
import AddingArrowIcon from '@/components/AddingArrowIcon/AddingArrowIcon';

import { Comment, News, NewsStore } from '@/models/News';
import { UserInfo } from '@/models/User';

import styles from './news.module.css';
import { roboto_mono } from '@/app/fonts';

const Page = () => {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [commentText, setCommentText] = useState('');
  const { id }: {id?: number} = useParams();
  const { fetchNews, fetchNewsWithAuth, news, fetchNewsComments, newsComments, addNewsComment, likeNews, dislikeNews } =
    useNews((state: NewsStore) => ({
      fetchNews: state.fetchNews,
      fetchNewsWithAuth: state.fetchNewsWithAuth,
      news: state.news,
      fetchNewsComments: state.fetchNewsComments,
      newsComments: state.newsComments,
      addNewsComment: state.addNewsComment,
      likeNews: state.likeNews,
      dislikeNews: state.dislikeNews,
    }));
  const { info } = useUser((state: UserInfo) => ({
    info: state.info,
  }));
  const token = getCookie('userToken');
  const isActiveInput = commentText ? `${styles.commentContent} ${styles.activeInput}` : `${styles.commentContent}`;

  useEffect(() => {
    if (id) {
      token ? fetchNewsWithAuth(id, token) : fetchNews(id);
      fetchNewsComments(id);
    }
  }, [id]);

  useEffect(() => {
    news !== null ? updateReaction(news.vote) : null;
  }, [news]);

  const onLike = () => {
    if (id) {
      setLike(!like);
      dislike && setDislike(false);
      likeNews(id);
    }
  };

  const onDislike = () => {
    if (id) {
      setDislike(!dislike);
      like && setLike(false);
      dislikeNews(id);
    }
  };

  const updateReaction = (data: number) => {
    switch (data) {
    case -1:
      setDislike(true);
      setLike(false);
      break;
    case 1:
      setLike(true);
      setDislike(false);
      break;
    default:
      console.log('There is not any reaction');
    }
  };

  const addComment = () => {
    const comment = {
      text: commentText,
      author: info['user_id'],
    };

    id && addNewsComment(id, comment);
    setCommentText('');
  };

  const view = (news: News, newsComments: Array<Comment>) => {
    const url = news.cover
      ? news.cover.replace('back:8000', '127.0.0.1')
      : 'https://farm2.staticflickr.com/1949/45717354341_a8dc471d63_b.jpg';

    return (
      <div className='news'>
        <div
          className={styles.topPart}
          style={{
            backgroundImage:
              `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${url})`,
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
              <p className={styles.date}>
                {news.added.replace(/ /g, '.')}
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(news.content) }} />
          <div className={styles.commentBlock}>
            <div className={styles.abovePart}>
              <p>{news.added.replace(/ /g, '.')}</p>
              {token && (
                <div style={{'display': 'flex'}}>
                  <button className={`${styles.shareButton}`} onClick={onDislike}>
                    <DislikeIcon color={dislike ? '#3f92d2' : '#ffffff'}/>
                  </button>
                  <button className={`${styles.shareButton}`} onClick={onLike}>
                    <LikeIcon color={like ? '#3f92d2' : '#ffffff'}/>
                  </button>
                  <button className={`${styles.shareButton} ${styles.share}`}>
                    <p>Поделиться</p>
                    <ShareIcon/>
                  </button>
                </div>
              )}
            </div>
            <hr className={styles.hr} />
            <p className={`${styles.numberComments} + ${roboto_mono.className}`}>
              100+ комментариев к этой статье
            </p>
            {token && (
              <>
                <div className={styles.addCommentField}>
                  <Image
                    src={'/userAvatar.jpg'}
                    width={50}
                    height={50}
                    alt={'Commentator avatar'}
                    className={styles.commentImg}
                  />
                  <div className={isActiveInput}>
                    <p className={styles.commentUsername}>{info.username}</p>
                    <div className={styles.commentInputField}>
                      <input
                        className={styles.commentInputText}
                        placeholder='Оставьте комментарий'
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                      />
                      {commentText && <AddingArrowIcon addComment={addComment}/>}
                    </div>
                  </div>
                </div>
              </>
            )}
            <div className={styles.comments}>
              {newsComments.map((comment: Comment) => {
                return <CommentComp {...comment} key={comment.comment_id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const content = news && newsComments
    ? view(news, newsComments)
    : null;

  return (
    <div>
      {content}
    </div>
  );
};

export default Page;
