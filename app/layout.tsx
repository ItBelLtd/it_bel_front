import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Metadata } from 'next';
import { merriweather_sans } from './fonts';
import './globals.css';
import './reset.css';

export const metadata: Metadata = {
	title: 'IT_BEL | startup',
	description: 'IT_BELL startup',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={merriweather_sans.className}>
				<div className='wrapper'>
					<Header />
					<main className='main'>{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
