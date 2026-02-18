'use client';

import { Header } from '@/components';
import { Main } from '@/components/main';
import { Nav } from '@/components/nav';
import { Hero } from '@/components/sections';
import { SCROLL_CONTAINER_TYPES } from '@/constants';
import { ActiveSectionProvider } from '@/context';
import { useIsMobile } from '@/hooks/use-mobile';

export default function Home() {
  const isMobile = useIsMobile();
  return (
    <ActiveSectionProvider>
      <Header />
      <div
        data-scroll-container={SCROLL_CONTAINER_TYPES.MOBILE}
        className="site-container grid h-dvh grid-cols-1 overflow-y-auto pt-(--header-height) sm:grid-cols-[300px_auto] sm:grid-rows-[auto_1fr] sm:gap-x-4 sm:pt-[calc(var(--header-height)+2rem)] md:gap-x-8"
      >
        <Hero />
        <Main key={isMobile ? 'mobile' : 'desktop'} />
        {!isMobile && <Nav variant="desktop" />}
      </div>
    </ActiveSectionProvider>
  );
}
