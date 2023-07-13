import Carousel from '@/components/MainPageComponents/Slider';
import Index from '@/components/MainPageComponents/PopularNews';
import { roboto_mono } from './fonts';
import styles from './page.module.css';

export default function Home() {
	return (
		<>
			<div className={styles.section}>
				<h2 className={`${styles.subtitle} + ${roboto_mono.className}`}>Последние новости</h2>
				<Carousel />
			</div>
			<div className={styles.section}>
				<h2 className={`${styles.subtitle} + ${roboto_mono.className}`}>Может быть интересно</h2>
				<Index />
			</div>
		</>
	);
}
