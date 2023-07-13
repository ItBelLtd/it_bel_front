'use client'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './Carousel.module.css'
import someNews from "@/data/News";
import Image from 'next/image';
import Link from "next/link";

const css = `
    .react-multi-carousel-dot-list {
        align-items: center;
        gap: 15px;
        justify-content: flex-start !important;
        left: 115px !important;
        bottom: 40px !important;
    }
`
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const CustomRightArrow = ({ onClick, ...rest } : any) => {
    const {
        onMove,
        carouselState: { currentSlide, deviceType }
    } = rest;
    return <button onClick={() => onClick()} className={styles.right_arrow}>
        <Image
            width={12}
            height={18}
            src={'/RightArrow.svg'}
            alt={'Next'}
        />
    </button>;
};
const CustomLeftArrow = ({ onClick, ...rest } : any) => {
    const {
        onMove,
        carouselState: { currentSlide, deviceType }
    } = rest;
    return <button onClick={() => onClick()} className={styles.left_arrow}>
        <Image
            width={12}
            height={18}
            src={'/LeftArrow.svg'}
            alt={'Prev'}
        />
    </button>;
};
const CustomDot = ({ onClick, ...rest } : any) => {
    const {
        onMove,
        index,
        active,
        carouselState: { currentSlide, deviceType }
    } = rest;
    return (
        <div
            className={`${active ? styles.active_dot : ''} ${styles.dot}`}
            onClick={() => onClick()}
        />
    );
};

const MyCarousel = () => {
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
                className={styles.carousel}
                autoPlay={ true }
                autoPlaySpeed={3000}
            >
                {someNews.map(news => {
                    return (
                        <Link href={`news/${String(news.id)}`} key={news.id} className={styles.news}>
                            <div className={styles.left_part}>
                                <div className={styles.top_part}>
                                    <h4 className={styles.author_name}>{ news.authorName }</h4>
                                    <h4 className={styles.date}>{ news.date }</h4>
                                </div>
                                <h3 className={styles.title}>{ news.title }</h3>
                                <div className="controllers" />
                            </div>
                            <div className={styles.right_part}>
                                <Image
                                    width={445}
                                    height={270}
                                    src={news.img}
                                    alt={'image'}
                                />
                            </div>
                        </Link>
                    )
                })}
            </Carousel>
            <style>{css}</style>
        </>
    )
};

export default MyCarousel;