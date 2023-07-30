import { Metadata } from 'next';
import AuthorCard from '@/components/AuthorCard';
import Tabs from '@/components/Tabs';
import TextEditor1 from "@/components/TextEditor1";
import TextEditor2 from "@/components/TextEditor2";
import avatar from '@/public/author-avatar-slug.png';
import styles from './author.module.css';
import dynamic from "next/dynamic";
import { NextPage } from "next";

export const metadata: Metadata = {
  title: 'IT_BEL | Author',
};

const Author: NextPage = () => {
  return (
    <div className={styles.container}>
      {/* <TextEditor1 /> */}
      <TextEditor2 />
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
