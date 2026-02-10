import { Background } from '@/components';
import type { Metadata } from 'next';
import { Figtree, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const figtree = Figtree({
  variable: '--font-figtree',
  subsets: ['latin'],
});

const TITLE = 'jgold.dev';
const DESCRIPTION =
  'Frontend Engineer working across design and development. Building React component libraries, design systems, and tooling with TypeScript and Tailwind.';

const BASE_METADATA: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL('https://jgold.dev'),
};

export const metadata: Metadata = {
  ...BASE_METADATA,
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://jgold.dev',
    siteName: TITLE,
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} ${figtree.variable}`}>
        <Background />
        {children}
      </body>
    </html>
  );
}
