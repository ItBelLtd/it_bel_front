import React, {useState, useEffect} from 'react';
import {useParams} from 'next/navigation';
import { useNews } from '@/app/stores/newsStore';
import {getCookie} from '@/services/cookie';

import LikeIcon from '@/components/LikeIcon/LikeIcon';
import Image from 'next/image';

import { Comment, NewsStore } from '@/models/News';

import styles from './comment.module.css';

const Comment = ({ comment_id, text, author, total_likes, added, vote }: Comment) => {
  const [like, setLike] = useState(false);
  const {id}: {id?: number} = useParams();
  const token = getCookie('userToken');
  const {likeNewsComment} = useNews((state: NewsStore) => ({
    likeNewsComment: state.likeNewsComment,
  }));

  useEffect(() => {
    updateLike();
  }, []);

  const onLike = () => {
    if (id) {
      setLike(!like);
      likeNewsComment(id, comment_id);
    }
  };

  const updateLike = () => {
    vote ? setLike(true) : null;
  };

  return (
    <div className={styles.comment}>
      <Image
        src={'/userAvatar.jpg'}
        width={50}
        height={50}
        alt={'Commentator avatar'}
        className={styles.commentImg}
      />
      <div className={styles.commentContent}>
        <div className={styles.commentTopPart}>
          <p className={styles.commentAuthor}>{author.username}</p>
          <p className={styles.commentDate}>
            {added}
          </p>
          {token && (
            <button className={styles.likeButton} onClick={onLike}>
              <LikeIcon color={like ? '#3f92d2' : '#ffffff'} />
            </button>
          )}
        </div>
        <p className={styles.commentText}>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
