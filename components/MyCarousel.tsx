import React from 'react';
import { Carousel } from 'antd/es';
import { News } from '@/models/News';

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#3F92D2',
};

interface MyCarouselProps {
  news: News[],
}

const MyCarousel = ({ news } : MyCarouselProps) => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange}>
      { news.map((article : News) => (
        <div key={article.id}>
          <p style={contentStyle}>{article.img}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default MyCarousel;