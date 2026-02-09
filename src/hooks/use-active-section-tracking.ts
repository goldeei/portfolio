'use client';

import { SiteSections } from '@/constants';
import { useActiveSection } from '@/context';
import { useDebouncedValue } from '@mantine/hooks';
import { useEffect } from 'react';

interface UseSectionTrackingOptions {
  isMobile: boolean;
  sectionEntries: (IntersectionObserverEntry | null)[];
  debounceDelay?: number;
}

/**
 * Hook to track active section via intersection observers and update URL hash
 * Returns refs to attach to each section component
 */
export function useActiveSectionTracking({ isMobile, sectionEntries, debounceDelay = 250 }: UseSectionTrackingOptions) {
  const { setActiveSectionId, activeSectionId } = useActiveSection();

  // Intersection observers for each section

  // Debounce the active section for hash updates (225ms delay)
  const [debouncedActiveSection] = useDebouncedValue(activeSectionId, debounceDelay);

  // Update active section state immediately based on intersection
  useEffect(() => {
    let newSection: SiteSections | null = null;

    for (const entry of sectionEntries) {
      if (entry?.isIntersecting) {
        newSection = entry.target.id as SiteSections;
        break;
      }
    }

    if (newSection && newSection !== activeSectionId) {
      setActiveSectionId(newSection);
    }
  }, [sectionEntries, activeSectionId, setActiveSectionId, isMobile]);

  useEffect(() => {
    if (debouncedActiveSection) {
      window.history.replaceState(null, '', `#${debouncedActiveSection}`);
    } else {
      // Clear hash when no section is active (hero on mobile)
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, [debouncedActiveSection]);
}
