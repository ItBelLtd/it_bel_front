import { Metadata, NextPage } from 'next';
import AuthorCard from '@/components/AuthorCard';
import Tabs from '@/components/Tabs';
import TextEditor1 from '@/components/TextEditor1';
// import TextEditor2 from '@/components/TextEditor2';
import styles from './author.module.css';
import TextEditor from '@/components/TextEditor2';

export const metadata: Metadata = {
  title: 'IT_BEL | Author',
};

const Author: NextPage = () => {
  const avatarURL = '/author-avatar-slug.png'; // В последствие переделать
  return (
    <div className={styles.container}>
      {/* <TextEditor1 /> */}
      {/* <TextEditor /> */}
      <AuthorCard
        avatarURL={avatarURL}
        name={'Иван Иванов'}
        contact={'@ivanI'}
        authorID={1}
      />
      <Tabs />
    </div>
  );
};

export default Author;
