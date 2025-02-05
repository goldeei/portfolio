import type { Metadata } from 'next';
import "./globals.css";
import { R3fProvider } from "@/context/r3fProvider";
import { Nav } from "@/components/nav";
import clsx from "clsx";
import { Raleway } from "next/font/google";

import favicons from "./favicon";

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
    <html lang="en">
      <body>
        <R3fProvider>
          <div
            className={clsx(
              'relative flex h-screen flex-col px-36 py-8',
              raleway.className,
            )}
          >
            <Nav />
            {children}
          </div>
        </R3fProvider>
      </body>
    </html>
  );
}
