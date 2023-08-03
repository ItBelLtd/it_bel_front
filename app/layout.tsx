import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { Metadata } from 'next';
import { merriweather_sans } from './fonts';
import { Providers } from './store/Provider';
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
        <Providers>
          <div className='wrapper'>
            <Header />
            <div className='container'>
              <main className='main'>{children}</main>
            </div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
