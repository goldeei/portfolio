'use client';

import { SCROLL_CONTAINER_TYPES, SiteSections } from '@/constants';
import { useActiveSectionTracking } from '@/hooks/use-active-section-tracking';
import { useIsMobile } from '@/hooks/use-mobile';
import { useMemo, useRef } from 'react';
import { AboutMe, Experience, LetsConnect } from './sections';

export const Main = () => {
  const isMobile = useIsMobile();

  const aboutMeRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const letsConnectRef = useRef<HTMLElement>(null);
  const bottomSentinelRef = useRef<HTMLDivElement>(null);

  const sections = useMemo(
    () => [
      { id: SiteSections.ABOUT_ME, ref: aboutMeRef },
      { id: SiteSections.EXPERIENCE, ref: experienceRef },
      { id: SiteSections.LETS_CONNECT, ref: letsConnectRef },
    ],
    [],
  );

  useActiveSectionTracking({ isMobile, sections, bottomSentinelRef });

  return (
    <main
      data-scroll-container={SCROLL_CONTAINER_TYPES.DESKTOP}
      className="pb-2 sm:row-span-2 sm:max-h-svh sm:overflow-y-auto sm:pe-2 sm:pb-8"
    >
      <AboutMe ref={aboutMeRef} />
      <Experience ref={experienceRef} />
      <LetsConnect ref={letsConnectRef} />
      <div ref={bottomSentinelRef} aria-hidden className="h-px" />
    </main>
  );
};
