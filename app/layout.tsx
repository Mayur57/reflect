import './globals.css';
import localFont from 'next/font/local'
import { Geist } from 'next/font/google'
import { Metadata } from 'next';

const newYork = localFont({
  src: './newyork.otf',
  display: 'swap',
  variable: '--font-new-york'
})

const manrope = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://mayurbhoi.com'),
  title: 'Reflect by Mayur Bhoi',
  description: "Look back at your year and reflect on how it's been",
  openGraph: {
    title: 'Mayur Bhoi',
    description: 'Full-stack developer; doing what I love.',
    url: 'https://mayurbhoi.com',
    siteName: 'Mayur Bhoi',
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
    title: 'Mayur Bhoi',
    card: 'summary_large_image',
  },
  verification: {
    google: 'GsV_3_triVwZXNnffPNiN2nGANIvZVbi97EbnbTJ29s',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${newYork.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}