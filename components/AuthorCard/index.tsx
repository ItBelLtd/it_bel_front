'use client';
import Button from '@/components/Button/Button';
import Image from 'next/image';
import styles from './author-card.module.css';

interface AuthorCardProps {
  avatarURL: string;
  name: string;
  contact: string;
  authorID: number;
}

const AuthorCard = ({
  avatarURL,
  name,
  contact,
  authorID,
}: AuthorCardProps) => {
  const handleUnfollowEvent = () => {
    // здесь будет запрос для отписки от автора по его ID
    // console.log(authorID);
  };

  return (
    <div className={styles.card}>
      <div className={styles.cover}>
        <Image
          alt="Аватар автора публикаций"
          src={avatarURL}
          objectFit="cover"
          width="120"
          height="160"
        />
      </div>

      <div className={styles.meta}>
        <span className={styles.name}>{name}</span>
        <span className={styles.contact}>{contact}</span>
      </div>

      <Button
        className={styles.button}
        type="button"
        text="Unfollow"
        clickHandler={handleUnfollowEvent}
      />
    </div>
  );
};

export default AuthorCard;
