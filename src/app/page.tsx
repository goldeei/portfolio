'use client';

import { Header } from '@/components';
import { Main } from '@/components/main';
import { Nav } from '@/components/nav';
import { Hero } from '@/components/sections';
import { ActiveSectionProvider } from '@/context';
import { useIsMobile } from '@/hooks/use-mobile';

export default function Home() {
  const isMobile = useIsMobile();
  return (
    <ActiveSectionProvider>
      <div className="site-container">
        <Header />
        <div
          className="mt-(--header-height) grid grid-cols-1 py-8 sm:grid-cols-[300px_auto] sm:grid-rows-[auto_1fr] sm:gap-x-12"
          style={{ height: 'calc(100dvh - var(--header-height))' }}
        >
          <Hero />
          <Main />
          {!isMobile && <Nav />}
        </div>
      </div>
    </ActiveSectionProvider>
  );
}
