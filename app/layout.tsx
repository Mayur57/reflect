import './globals.css';
import localFont from 'next/font/local'
import { Geist, Bodoni_Moda } from 'next/font/google'
import { Metadata } from 'next';

const newYork = localFont({
  src: './NewYork.otf',
  display: 'swap',
  variable: '--font-new-york'
})

const ss4 = Bodoni_Moda({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ss4'
})

const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://reflectly.vercel.app'),
  title: 'Reflect',
  description: "Look back at your year and reflect on how it's been",
  openGraph: {
    title: 'Reflect',
    description: "Look back at your year and reflect on how it's been",
    url: 'https://reflectly.vercel.app',
    siteName: 'Reflect',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Reflect',
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${newYork.variable} ${geist.variable} ${ss4.variable}`}>
      <body>{children}</body>
    </html>
  );
}