'use client'
import { Typography } from 'antd/es';
import MyCarousel from '@/components/MyCarousel';
import { News } from '@/models/News';
import './main.scss';
import { Image } from 'antd/es';

const { Title, Text } = Typography;

export default function Home() {
	const someNews : News[] = [{
		id: 0,
		title: 'Новость 1',
		date: '01.01.23',
		dscr: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil odit, vero voluptates beatae dignissimos sed harum praesentium molestias aspernatur quo.',
		img: 'https://farm2.staticflickr.com/1949/45717354341_a8dc471d63_b.jpg'
	},
	{
		id: 1,
		title: 'Новость 2',
		date: '02.01.23',
		dscr: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil odit, vero voluptates beatae dignissimos sed harum praesentium molestias aspernatur quo.',
		img: 'https://st.depositphotos.com/1011976/2987/i/450/depositphotos_29872557-stock-photo-old-bridge-over-the-river.jpg'
	},]

	return <div className="content">
		<div className="section">
			<Title level={3} className='section__title'>Последние новости</Title>
			<MyCarousel news={someNews} />
		</div>
		
		<div className="section">
			<Title level={3} className='section__title'>Может быть интересно</Title>
			{ someNews.map(article => (
				<div className="rec-news" key={ article.id }>
					<div className="rec-news__text">
						<Title level={4} className="rec-news__title">{ article.title }</Title>
						<Text type='secondary' className="rec-news__date">{ article.date }</Text>
						<Text className="rec-news__content">{ article.dscr }</Text>
					</div>
					<Image 
						src={article.img}
						width={350}
						height={240}
            preview={false}
					/>
				</div>
			))}
		</div>
	</div>;
}
