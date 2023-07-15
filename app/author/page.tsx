import { Metadata } from 'next';
import AuthorCard from '@/components/AuthorCard';
import TabPanels from '@/components/TabPanels';
import avatar from '@/public/author-avatar-slug.png';
import styles from './author.module.css'

export const metadata: Metadata = {
  title: 'IT_BEL | Author',
};

const Author = () => {
  return (
    <div className={styles.container}>
      <AuthorCard avatarURL={avatar.src} name={'Иван Иванов'} contact={'@ivanI'} authorID={1} />
      <TabPanels />
    </div>
  );
};

export default Author;
