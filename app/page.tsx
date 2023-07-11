import Carousel from '@/components/MainPageComponents/Carousel/Carousel';
import PopularNews from '@/components/MainPageComponents/PopularNews/PopularNews';
import { roboto_mono } from './fonts';
import styles from './page.module.css';

export default function Home() {
	return (
		<div className={styles.content}>
			<div className={styles.section}>
				<h2 className={`${styles.subtitle} + ${roboto_mono.className}`}>Последние новости</h2>
				<Carousel />
			</div>
			<div className={styles.section}>
				<h2 className={`${styles.subtitle} + ${roboto_mono.className}`}>Может быть интересно</h2>
				<PopularNews />
			</div>
		</div>
	);
}
