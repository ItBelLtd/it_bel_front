'use client';
import { Metadata, NextPage } from 'next';
import styles from './author.module.css';
import {useAuthors} from '@/app/stores/authorsStore';
import { useEffect } from 'react';
import { Author, Authors } from '@/models/Authors';

const Author: NextPage = () => {
  const { getAuthor, author } = useAuthors(state => state);
  useEffect(() => {
    getAuthor(1);
    console.log('SOME TEST');
    console.log(author);
  }, [author]);
  return (
    <div className={styles.container}>
      {/*{ author.name }*/}
    </div>
  );
};

export default Author;
