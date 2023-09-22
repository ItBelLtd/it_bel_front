'use client';
import { Info } from '@/models/User';
import { useEffect, useState } from 'react';

import Button from '@/components/Button/Button';
import Image from 'next/image';
import styles from './author-card.module.css';

interface AuthorCardFields {
  avatarURL: string;
  firstField: string;
  secondField: string;
}

const AuthorCard = ({ info }: { info: Info }) => {
  const [fields, setFields] = useState<AuthorCardFields>({
    avatarURL: '/author-avatar-slug.png',
    firstField: 'Loading...',
    secondField: 'Loading...',
  });
  useEffect(() => {
    info.as_author !== null
      ? setFields({
          avatarURL: '/author-avatar-slug.png',
          firstField: `${info.as_author.name} ${info.as_author.surname}`,
          secondField: `${info.username}`,
        })
      : setFields({
          avatarURL: '/author-avatar-slug.png',
          firstField: info.username ? info.username : 'Какой-то ник',
          secondField: `${info.username}`,
        });
  }, [info]);

  const handleUnfollowEvent = () => {
    // здесь будет запрос для отписки от автора по его ID
    // console.log(authorID);
  };
  return (
    <div className={styles.card}>
      <div className={styles.cover}>
        <Image
          alt='Аватар'
          src={fields.avatarURL}
          objectFit='cover'
          width='120'
          height='160'
        />
      </div>

      <div className={styles.meta}>
        <span className={styles.name}>{fields.firstField}</span>
        <span className={styles.contact}>{fields.secondField}</span>
      </div>
      {info.as_author === null ? null : (
        <Button
          className={styles.button}
          type='button'
          text='Unfollow'
          clickHandler={handleUnfollowEvent}
        />
      )}
    </div>
  );
};

export default AuthorCard;
