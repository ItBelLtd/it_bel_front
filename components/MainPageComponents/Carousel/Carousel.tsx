'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import React, { useRef, useState } from 'react';
import styles from './Carousel.module.css'
import {News} from "@/models/News";
import someNews from "@/data/News";

const Carousel = () => {

    return (
        <>
            <Swiper
                pagination={{
                    clickable: true
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Pagination, Navigation, Autoplay]}
                className={ styles.Swiper }
            >
                { someNews.map((news: News) => {
                    return (
                        <SwiperSlide className={ styles.news } key={ news.id }>
                            <img src={news.img} alt="" className={styles.img}/>
                            <div className={styles.text}>
                                <h3 className={styles.title}>{ news.title }</h3>
                                <p className={styles.dscr}>{ news.dscr }</p>
                            </div>
                        </SwiperSlide>
                    )
                })};
            </Swiper>
        </>
    );
};

export default Carousel;