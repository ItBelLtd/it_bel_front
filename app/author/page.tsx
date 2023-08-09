'use client';
import { Metadata, NextPage } from 'next';
import styles from './author.module.css';
import { useAuthors } from '@/app/stores/authorsStore';
import { useEffect } from 'react';
import { Author, Authors } from '@/models/Authors';

const Author: NextPage = () => {
  const { getAllAuthors, authors } = useAuthors((state) => state);
  useEffect(() => {
    getAllAuthors();
  }, []);
  return (
    <div className={styles.container}>
      {authors.map((author: Author) => (
        <p key={author.name}>{author.surname}</p>
      ))}
    </div>
  );
};

export default Author;
