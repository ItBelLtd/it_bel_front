import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

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
			<body className={inter.className}>
				<div className='wrapper'>
					<Header />
					<main className='main'>{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
