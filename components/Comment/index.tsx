import React from 'react';
import styles from './comment.module.css';
import {Comment} from '@/models/Comment';
import Image from 'next/image';

interface CommentProps {
    comment: Comment
}

const Comment = ({ comment } : CommentProps) => {
  return (
    <div className={styles.comment} >
      <Image
        src={'/userAvatar.jpg'}
        width={50}
        height={50}
        alt={'Commentator avatar'}
        className={styles.commentImg}
      />
      <div className={styles.commentContent}>
        <div className={styles.commentTopPart}>
          <p className={styles.commentAuthor}>{comment.author}</p>
          <p className={styles.commentDate}>{comment.added}</p>
        </div>
        <p className={styles.commentText}>{comment.text}</p>
      </div>
    </div>
  );
};

export default Comment;