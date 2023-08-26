'use client';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './Slider.module.css';
import { News } from '@/models/News';
import Image from 'next/image';
import Link from 'next/link';
import { useNews } from '@/app/stores/newsStore';
import { useEffect } from 'react';

const css = `
  .react-multi-carousel-dot-list {
        align-items: center;
        gap: 15px;
        justify-content: flex-start !important;
        left: 115px !important;
        bottom: 40px !important;
    }
`;
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CustomRightArrow = ({ onClick, ...rest }: any) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;

  return (
    <button onClick={() => onClick()} className={styles.rightArrow}>
      <Image width={12} height={18} src={'/rightArrow_icon.svg'} alt={'Next'} />
    </button>
  );
};
const CustomLeftArrow = ({ onClick, ...rest }: any) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;

  return (
    <button onClick={() => onClick()} className={styles.leftArrow}>
      <Image width={12} height={18} src={'/leftArrow_icon.svg'} alt={'Prev'} />
    </button>
  );
};
const CustomDot = ({ onClick, ...rest }: any) => {
  const {
    onMove,
    index,
    active,
    carouselState: { currentSlide, deviceType },
  } = rest;
  return (
    <div
      className={`${active ? styles.activeDot : ''} ${styles.dot}`}
      onClick={() => onClick()}
    />
  );
};

const MyCarousel = () => {
  const { fetchLatestNews, latestNews } = useNews((state) => ({
    fetchLatestNews: state.fetchLatestNews,
    latestNews: state.latestNews,
  }));

  useEffect(() => {
    fetchLatestNews(1);
  }, []);

  return (
    <>
      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        showDots
        customDot={<CustomDot />}
        autoPlay={true}
        autoPlaySpeed={3000}
        className={styles.carousel}
      >
        {latestNews.map((news: News) => {
          return (
            <Link
              href={`news/${String(news.news_id)}`}
              key={news.news_id}
              className={styles.news}
            >
              <div className={styles.leftPart}>
                <div className={styles.topPart}>
                  <h4 className={styles.authorName}>{news.author.name}</h4>
                  <h4 className={styles.date}>
                    {news.added.slice(0, 10).replace(/-/g, '.')}
                  </h4>
                </div>
                <h3 className={styles.title}>{news.title}</h3>
                <div className='controllers' />
              </div>
              <div className={styles.rightPart}>
                <Image
                  width={445}
                  height={270}
                  src={
                    'https://farm2.staticflickr.com/1949/45717354341_a8dc471d63_b.jpg'
                  }
                  alt={'image'}
                />
              </div>
            </Link>
          );
        })}
      </Carousel>
      <style>{css}</style>
    </>
  );
};

export default MyCarousel;
