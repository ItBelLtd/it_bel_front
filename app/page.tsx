'use client'
import { Typography } from 'antd/es';
import MyCarousel from '@/components/MyCarousel';
import { News } from '@/models/News';
import './main.scss'

const { Title, Text } = Typography;

export default function Home() {
	const someNews : News[] = [{
		id: 0,
		title: 'Новость 1',
		date: '01.01.23',
		dscr: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil odit, vero voluptates beatae dignissimos sed harum praesentium molestias aspernatur quo.',
		img: 'Image 1'
	},
	{
		id: 1,
		title: 'Новость 2',
		date: '02.01.23',
		dscr: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil odit, vero voluptates beatae dignissimos sed harum praesentium molestias aspernatur quo.',
		img: 'Image 2'
	},]

	return <div className="content">
		<div className="section">
			<Title level={3} className='section__title' style={{ color: 'white' }}>Последние новости</Title>
			<MyCarousel news={someNews} />
		</div>
		<div className="section">
			<Title level={3} className='section__title' style={{ color: 'white' }}>Может быть интересно</Title>
			{ someNews.map(article => (
				<div className="rec-news" key={ article.id }>
					<div className="rec-news__text">
						<Title level={4} style={{ color: 'white' }}>{ article.title }</Title>
						<Text type='secondary' style={{ color: '#676767' }}>{ article.date }</Text>
						<Text style={{ color: 'white' }}>{ article.dscr }</Text>
					</div>
					<Text mark strong className='rec-news__image'>{ article.img }</Text>
				</div>
			))}
		</div>
	</div>;
}
