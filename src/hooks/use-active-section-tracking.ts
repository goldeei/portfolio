'use client';

import { SiteSections } from '@/constants';
import { useActiveSection } from '@/context';
import { useEffect, useMemo } from 'react';

interface UseSectionTrackingOptions {
  isMobile: boolean;
  sectionEntries: (IntersectionObserverEntry | null)[];
}

export function useActiveSectionTracking({ sectionEntries }: UseSectionTrackingOptions) {
  const { setActiveSectionId } = useActiveSection();
  // Get current active section from intersections
  const activeSection = useMemo(() => {
    const validSectionEntries = sectionEntries.filter((i) => i !== null);
    const activeIndex = validSectionEntries.findIndex((i) => i.isIntersecting);
    const sectionId =
      activeIndex !== -1 && validSectionEntries[activeIndex].target.id
        ? validSectionEntries[activeIndex].target.id
        : null;

    if (sectionId && Object.values(SiteSections).includes(sectionId as SiteSections)) {
      return sectionId as SiteSections;
    }
    return null;
  }, [sectionEntries]);

  // Update active section when it changes
  useEffect(() => {
    setActiveSectionId(activeSection);
    if (activeSection) {
      window.history.replaceState(null, '', `${window.location.pathname}#${activeSection}`);
    } else {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, [activeSection, setActiveSectionId]);
}
