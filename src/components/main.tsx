'use client';

import { SiteSections } from '@/constants';
import { useActiveSection } from '@/context';
import { useIsMobile } from '@/hooks/use-mobile';
import { useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { AboutMe, Experience, LetsConnect } from './sections';

export const Main = () => {
  const { setActiveSectionId } = useActiveSection();
  const isMobile = useIsMobile();
  const mainRef = useRef<HTMLElement>(null);

  const aboutMeRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const letsConnectRef = useRef<HTMLDivElement>(null);

  const aboutMeInView = useInView(aboutMeRef, {
    root: isMobile ? undefined : mainRef,
    amount: 0.5,
  });
  const experienceInView = useInView(experienceRef, {
    root: isMobile ? undefined : mainRef,
    amount: 0.5,
  });
  const letsConnectInView = useInView(letsConnectRef, {
    root: isMobile ? undefined : mainRef,
    amount: 0.5,
  });

  useEffect(() => {
    if (letsConnectInView) {
      setActiveSectionId(SiteSections.LETS_CONNECT);
      window.history.replaceState(null, '', `#${SiteSections.LETS_CONNECT}`);
    } else if (experienceInView) {
      setActiveSectionId(SiteSections.EXPERIENCE);
      window.history.replaceState(null, '', `#${SiteSections.EXPERIENCE}`);
    } else if (aboutMeInView) {
      setActiveSectionId(SiteSections.ABOUT_ME);
      window.history.replaceState(null, '', `#${SiteSections.ABOUT_ME}`);
    }
  }, [aboutMeInView, experienceInView, letsConnectInView, setActiveSectionId]);

  return (
    <main ref={mainRef} className="sm:row-span-2 sm:max-h-svh sm:overflow-y-auto">
      <div ref={aboutMeRef}>
        <AboutMe />
      </div>
      <div ref={experienceRef}>
        <Experience />
      </div>
      <div ref={letsConnectRef}>
        <LetsConnect />
      </div>
    </main>
  );
};
