
import Carousel from "@/components/MainPageComponents/Carousel/Carousel";
import styles from './page.module.css'
import Podborka from "@/components/MainPageComponents/Podborka/Podborka";

export default function Home() {
	return <div className={ styles.content }>
		<div className={styles.section}>
			<h2 className={styles.subtitle}>Последние новости</h2>
			<Carousel />
		</div>
		<div className={styles.section}>
			<h2 className={styles.subtitle}>Может быть интересно</h2>
			<Podborka />
		</div>
	</div>;
}
