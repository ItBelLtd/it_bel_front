'use client';
import { Author } from '@/models/Authors';

import Image from 'next/image';
import styles from './author.module.css';

interface Props {
  allAuthors: Author[];
}

const Author = ({ allAuthors }: Props) => {
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
