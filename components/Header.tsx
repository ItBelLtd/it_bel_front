import Link from 'next/link';

const Header = () => {
	return (
		<header className='header'>
			<Link href='/'>IT_BEL</Link>
			<Link href='/author'>Авторы</Link>
			<Link href='/publication'>Сделать публикацию</Link>
		</header>
	);
};

export { Header };
