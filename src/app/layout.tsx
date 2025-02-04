import type { Metadata } from 'next';
import './globals.css';
import { R3fProvider } from '@/context/r3fProvider';

import favicons from './favicon';

export const metadata: Metadata = {
  title: 'jgoldfarb.dev',
  description:
    'A personal website showcasing projects and blog posts by J. Goldfarb.',
  icons: {
    icon: favicons,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <R3fProvider>{children}</R3fProvider>
      </body>
    </html>
  );
}
