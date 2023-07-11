import { merriweather_sans } from '@/app/fonts';
import someNews from '@/data/News';
import { News } from '@/models/News';
import Image from 'next/image';
import styles from './PopularNews.module.css';
import { roboto_mono } from "@/app/fonts";
import {calculateSizeAdjustValues} from "next/dist/server/font-utils";

const PopularNews = () => {

	return (
		<div className={styles.container}>
			{someNews.map((news: News) => {
				return (
					<div className={styles.recNews}>
						<div className={styles.text}>
							<h3 className={`${styles.title} + ${roboto_mono.className}`}>{news.title}</h3>
							<h4 className={styles.date}>{news.date}</h4>
							<p className={styles.dscr}>
								{news.dscr}
							</p>
						</div>
						<Image
							src={news.img}
							width={350}
							height={240}
							className={styles.img}
							alt='Image'
						/>
					</div>
				);
			})}
		</div>
	);
};

export default PopularNews;
