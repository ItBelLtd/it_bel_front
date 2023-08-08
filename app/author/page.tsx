'use client';
import { Metadata, NextPage } from 'next';
// import AuthorCard from '@/components/AuthorCard';
// import Tabs from '@/components/Tabs';
// import TextEditor1 from '@/components/TextEditor1';
// import TextEditor2 from '@/components/TextEditor2';
// import avatar from '@/public/author-avatar-slug.png';
import styles from './author.module.css';
import { useAuthors } from '../stores/store';
import { useEffect } from 'react';
import Link from 'next/link';
import { Author } from '@/models/Authors';
// import TextEditor from '@/components/TextEditor2';

export const metadata: Metadata = {
  title: 'IT_BEL | Author',
};

const Author: NextPage = () => {
  const { authors, getAllAuthors } = useAuthors((state) => ({
    getAllAuthors: state.getAllAuthors,
    authors: state.authors,
  }));
  useEffect(() => {
    getAllAuthors('authors/');
  }, []);
  function renderAuthors(data: Author[]) {
    const authors = data.map((item) => {
      return (
        <Link key={item.id} href={item.link}>
          {item.name}
        </Link>
      );
    });
    return <div className=''>{authors}</div>;
  }
  const authorsList = renderAuthors(authors);
  return (
    <div className={styles.container}>
      {authorsList}
      {/* <TextEditor1 /> */}
      {/* <TextEditor /> */}
      {/* <AuthorCard
        avatarURL={avatar.src}
        name={'Иван Иванов'}
        contact={'@ivanI'}
        authorID={1}
      />
      <Tabs /> */}
    </div>
  );
};

export default Author;
