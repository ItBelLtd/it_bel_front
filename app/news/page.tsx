import Author from '@/components/Author';
import Input from '@/components/Input/Input';
import styles from './allNews.module.css';
import { merriweather_sans } from '@/app/fonts';
const News = () => {
  return (
    <div className={`${styles.newsContainer} ${merriweather_sans.className}`}>
      <div className='news'></div>
      <div className={styles.authors}>
        <div className={styles.wrapper}>
          <Input text='Ищите автора' width='226px' />
          <Author />
        </div>
      </div>
    </div>
  );
};
export default News;
