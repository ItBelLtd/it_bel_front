import './main.css';

export default function Home() {
	const someNews = [{
		id: 0,
		title: 'Новость 1',
		date: '01.01.23',
		dscr: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil odit, vero voluptates beatae dignissimos sed harum praesentium molestias aspernatur quo.',
		img: 'Image Link'
	},
	{
		id: 1,
		title: 'Новость 2',
		date: '02.01.23',
		dscr: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil odit, vero voluptates beatae dignissimos sed harum praesentium molestias aspernatur quo.',
		img: 'Image Link'
	},]

	return <div className="content">
		<section>
			<h2 className='section-title'>Последние новости</h2>
			{ someNews.map((news) => {	return <div className="last-news" key={ news.id }>
					<h3 className="last-news__title">{ news.title }</h3>
					<p className="last-news__dscr">{ news.dscr }</p>
				</div> 
			})}
		</section>
		<section>
			<h2 className='section-title'>Может быть интересно</h2>
			{ someNews.map((news) => { return <div className="rec-news" key={ news.id }>
					<div className="text">
						<h3 className="rec-news__title">{ news.title }</h3>
						<p className="rec-news__date">{ news.date }</p>
						<p className="rec-news_dscr">{ news.dscr }</p>
					</div>
					<p>{ news.img }</p>
				</div>
			})}
		</section>
	</div>;
}
