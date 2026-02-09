'use client';

import { useActiveSectionTracking } from '@/hooks/use-active-section-tracking';
import { useIsMobile } from '@/hooks/use-mobile';
import { useIntersection } from '@mantine/hooks';
import { AboutMe, Experience, LetsConnect } from './sections';

export const Main = () => {
  const isMobile = useIsMobile();

  const { ref: aboutMeRef, entry: aboutMeEntry } = useIntersection({
    threshold: 0.5,
  });
  const { ref: experienceRef, entry: experienceEntry } = useIntersection({
    threshold: 0.5,
  });
  const { ref: letsConnectRef, entry: letsConnectEntry } = useIntersection({
    threshold: 0.3,
  });

  useActiveSectionTracking({ isMobile, sectionEntries: [aboutMeEntry, experienceEntry, letsConnectEntry] });

  return (
    <main className="sm:row-span-2 sm:max-h-svh sm:overflow-y-auto">
      <AboutMe ref={aboutMeRef} />
      <Experience ref={experienceRef} />
      <LetsConnect ref={letsConnectRef} />
    </main>
  );
};
