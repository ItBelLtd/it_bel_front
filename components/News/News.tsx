import { roboto_mono } from '@/app/fonts';
import { News } from '@/models/News';

import Image from 'next/image';
import Link from 'next/link';
import styles from './news.module.css';
import DOMPurify from 'dompurify';

interface Props {
  dataNews: News[];
  width: number;
  height: number;
}

const News = ({ dataNews, width, height }: Props) => {
  const newsRender = () => {
    const news = dataNews.map((item) => {
      return (
        <Link href={`news/${String(item.news_id)}`} key={item.news_id}>
          <div className={styles.recNews}>
            <div className={styles.text}>
              <h3 className={`${styles.title} + ${roboto_mono.className}`}>
                {item.title || 'Заголовка нет'}
              </h3>
              <h4 className={styles.date}>
                {item.added || 'Дата добавления не известна'}
              </h4>
              <p
                className={styles.content}
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(item.content),
                }}
              />
            </div>
            <Image
              src={
                item.cover !== null
                  ? item.cover.replace('back:8000', '127.0.0.1')
                  : 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg'
              }
              width={width}
              height={height}
              className={styles.img}
              alt='Image'
            />
          </div>
        </Link>
      );
    });
    return <>{news}</>;
  };

  return newsRender();
};

export default News;
