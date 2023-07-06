'use client'
import { Typography } from 'antd/es';
import MyCarousel from './../components/MyCarousel';
import { News } from '@/models/News';

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

	return <div className="content" style={{ padding: '35px 165px 50px 165px' }}>
		<div className="last-news" style={{ marginBottom: '80px' }}>
			<Title level={3} style={{ color: 'white', marginBottom: '20px' }}>Последние новости</Title>
			<MyCarousel news={someNews} />
		</div>
		<div className="rec-news">
			<Title level={3} style={{ color: 'white', marginBottom: '20px' }}>Может быть интересно</Title>
			{ someNews.map(article => (
				<div className="rec-news__item" key={ article.id } style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
					<div className="text" style={{ display: 'flex', flexDirection: 'column' }}>
						<Title level={4} style={{ color: 'white' }}>{ article.title }</Title>
						<Text type='secondary' style={{ color: '#676767' }}>{ article.date }</Text>
						<Text style={{ color: 'white' }}>{ article.dscr }</Text>
					</div>
					<Text mark strong>{ article.img }</Text>
				</div>
			))}
		</div>
	</div>;
}
