import React from 'react';
import styles from './comment.module.css';
import Image from 'next/image';
import { comment } from '@/models/News';

const Comment = ({ comment_id, text, author, total_likes, added }: comment) => {
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
          <p className={styles.commentAuthor}>{author}</p>
          <p className={styles.commentDate}>{added.slice(0, 10).replace(/-/g, '.')}</p>
        </div>
        <p className={styles.commentText}>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
