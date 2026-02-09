'use client';

import { SCROLL_CONTAINER_TYPES } from '@/constants';
import { useActiveSectionTracking } from '@/hooks/use-active-section-tracking';
import { useIsMobile } from '@/hooks/use-mobile';
import { getScrollContainer } from '@/lib/scroll-utils';
import { useIntersection } from '@mantine/hooks';
import { AboutMe, Experience, LetsConnect } from './sections';

const SCROLL_THRESHOLD = 0.25;

export const Main = () => {
  const isMobile = useIsMobile();

  const scrollContainer = getScrollContainer(isMobile);

  const { ref: aboutMeRef, entry: aboutMeEntry } = useIntersection({
    root: scrollContainer,
    threshold: SCROLL_THRESHOLD,
  });

  const { ref: experienceRef, entry: experienceEntry } = useIntersection({
    root: scrollContainer,
    threshold: SCROLL_THRESHOLD,
  });

  const { ref: letsConnectRef, entry: letsConnectEntry } = useIntersection({
    root: scrollContainer,
    threshold: SCROLL_THRESHOLD,
  });
  useActiveSectionTracking({ isMobile, sectionEntries: [aboutMeEntry, experienceEntry, letsConnectEntry] });

  return (
    <main
      data-scroll-container={SCROLL_CONTAINER_TYPES.DESKTOP}
      className="sm:row-span-2 sm:max-h-svh sm:overflow-y-auto"
    >
      <AboutMe ref={aboutMeRef} />
      <Experience ref={experienceRef} />
      <LetsConnect ref={letsConnectRef} />
    </main>
  );
};
