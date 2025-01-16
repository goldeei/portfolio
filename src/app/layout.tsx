import type { Metadata } from 'next';
import './globals.css';
import { R3fProvider } from '@/context/r3fProvider';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
