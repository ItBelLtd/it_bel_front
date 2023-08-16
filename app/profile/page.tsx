import { Metadata, NextPage } from 'next';
import AuthorCard from '@/components/AuthorCard';
import Tabs from '@/components/Tabs';
import styles from './profile.module.css';

export const metadata: Metadata = {
  title: 'IT_BEL | Profile',
};

const Profile: NextPage = () => {

  const avatarURL = '/author-avatar-slug.png'; // В последствие переделать
  return (
    <div className={styles.container}>
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

export default Profile;
