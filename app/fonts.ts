import { Merriweather_Sans, Roboto_Mono } from 'next/font/google';
import { NextFont } from 'next/dist/compiled/@next/font';

export const roboto_mono: NextFont = Roboto_Mono({
	subsets: ['latin'],
	display: 'swap',
});

export const merriweather_sans: NextFont = Merriweather_Sans({
	subsets: ['latin'],
	display: 'swap',
});
