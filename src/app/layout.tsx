import { Nav } from '@/components/nav';
import { CubeStateProvider } from '@/context/cubeStateProvider';
import { R3fProvider } from '@/context/r3fProvider';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import './globals.css';

import { cn } from '@/lib/style-utils';
import favicons from './favicon';

export const metadata: Metadata = {
  title: 'jgoldfarb.dev',
  description:
    'A personal website showcasing projects and blog posts by J. Goldfarb.',
  icons: {
    icon: favicons,
  },
};
const raleway = Raleway({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        'bg-background text-foreground flex justify-center',
        raleway.className,
      )}
    >
      <body className="w-full max-w-7xl overflow-x-hidden">
        <R3fProvider>
          <CubeStateProvider>
            <div
              className={clsx(
                'relative flex h-screen flex-col p-[var(--page-padding)]',
              )}
            >
              <Nav />
              {children}
            </div>
          </CubeStateProvider>
        </R3fProvider>
      </body>
    </html>
  );
}
