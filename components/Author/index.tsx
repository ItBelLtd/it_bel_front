'use client';
import { useAuthors } from '@/app/stores/authorsStore';
import { useEffect } from 'react';

import Image from 'next/image';
import styles from './author.module.css';

const Author = () => {
  const { getAuthors, allAuthors } = useAuthors((state) => ({
    getAuthors: state.fetchAllAuthors,
    allAuthors: state.allAuthors,
  }));
  useEffect(() => {
    getAuthors(1);
  }, []);

  const renderAuthor = () => {
    const authors = allAuthors.map((item) => {
      return (
        <div key={item.author_id} className={styles.authorCard}>
          <p className={styles.name}>{item.name + ' ' + item.surname}</p>
          <Image src='/userAvatar.jpg' alt='user img' width={40} height={40} />
        </div>
      );
    });
    return <>{authors}</>;
  };
  const authorsList = renderAuthor();
  return <div>{authorsList}</div>;
};
export default Author;
