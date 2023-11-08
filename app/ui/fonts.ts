import { Inter } from 'next/font/google'
import { Noto_Sans_SC } from 'next/font/google'
import { Lusitana } from 'next/font/google';

export const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter'
});
export const lusitana = Lusitana({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-lusitana' });

export const notoSansSC = Noto_Sans_SC({ weight: '400', subsets: ['cyrillic'], variable: '--font-noto-sans-sc' });