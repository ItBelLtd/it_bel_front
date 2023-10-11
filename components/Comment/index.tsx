import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useNews } from '@/app/stores/newsStore';
import { useUser } from '@/app/stores/userStore';
import { getCookie } from '@/services/cookie';

import LikeIcon from '@/components/LikeIcon/LikeIcon';
import EditIcon from '@/components/EditIcon/EditIcon';
import Image from 'next/image';

import { Comment } from '@/models/News';

import styles from './comment.module.css';
import Link from 'next/link';
import AddingArrowIcon from '@/components/AddingArrowIcon/AddingArrowIcon';

const Comment = ({
  comment_id,
  text,
  author,
  total_likes,
  added,
  vote,
}: Comment) => {
  const [like, setLike] = useState(false);
  const [edit, setEdit] = useState(false);
  const [commentText, setCommentText] = useState(text);
  const { id }: { id?: number } = useParams();
  const token = getCookie('userToken');
  const { likeNewsComment, changeNewsComment } = useNews((state) => ({
    likeNewsComment: state.likeNewsComment,
    changeNewsComment: state.changeNewsComment,
  }));
  const { info } = useUser((state) => ({
    info: state.info,
  }));

  useEffect(() => {
    updateLike(vote);
  }, [vote]);

  const onLike = () => {
    if (id) {
      setLike(!like);
      likeNewsComment(id, comment_id);
    }
  };

  const onEdit = () => {
    if (edit) {
      setCommentText(text);
      setEdit(false);
    } else {
      setEdit(true);
    }
  };

  const updateLike = (vote: number) => {
    switch (vote) {
      case 0:
        setLike(false);
        break;
      case 1:
        setLike(true);
        break;
      default:
        break;
    }
  };

  const changeComment = () => {
    const changes = {
      text: commentText,
    };

    id && changeNewsComment(id, comment_id, changes);
    setEdit(false);
  };

  return (
    <div className={styles.comment}>
      <Link
        href={`/profile/${author.username}/${author.user_id}`}
        className={styles.authorComment}
      >
        <Image
          src={'/userAvatar.jpg'}
          width={50}
          height={50}
          alt={'Commentator avatar'}
          className={styles.commentImg}
        />
      </Link>
      <div className={styles.commentContent}>
        <div className={styles.commentTopPart}>
          <p className={styles.commentAuthor}>{author.username}</p>
          <p className={styles.commentDate}>{added}</p>
          {token && (
            <button className={styles.likeButton} onClick={onLike}>
              <LikeIcon color={like ? '#3f92d2' : '#ffffff'} />
            </button>
          )}
          {token && info.as_author.author_id === author.author_id && (
            <button className={styles.editButton} onClick={onEdit}>
              <EditIcon />
            </button>
          )}
        </div>
        {edit ? (
          <div className={styles.editInputWrapper}>
            <input
              className={styles.editInput}
              type='text'
              value={commentText}
              autoFocus={true}
              onInput={(e) => setCommentText(e.currentTarget.value)}
            />
            <AddingArrowIcon addComment={changeComment} />
          </div>
        ) : (
          <p className={styles.commentText}>{commentText}</p>
        )}
      </div>
    </div>
  );
};

export default Comment;
