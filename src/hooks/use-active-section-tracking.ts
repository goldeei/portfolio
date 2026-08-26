'use client';

import { SiteSections } from '@/constants';
import { useActiveSection } from '@/context';
import { getScrollContainer } from '@/lib/scroll-utils';
import { RefObject, useEffect } from 'react';

const HEADER_OFFSET_PX = 8;

interface SectionRef {
  id: SiteSections;
  ref: RefObject<HTMLElement | null>;
}

interface UseSectionTrackingOptions {
  isMobile: boolean;
  sections: SectionRef[];
  bottomSentinelRef: RefObject<HTMLElement | null>;
}

function getActiveSectionId(container: HTMLElement, sections: SectionRef[], isAtBottom: boolean): SiteSections | null {
  if (sections.length === 0) return null;

  if (isAtBottom) return sections[sections.length - 1].id;

  const offsetLine = container.getBoundingClientRect().top + HEADER_OFFSET_PX;

  let activeId: SiteSections | null = null;
  let bestTop = -Infinity;

  for (const { id, ref } of sections) {
    const el = ref.current;
    if (!el) continue;

    const top = el.getBoundingClientRect().top;
    if (top <= offsetLine && top > bestTop) {
      bestTop = top;
      activeId = id;
    }
  }

  return activeId;
}

export function useActiveSectionTracking({ isMobile, sections, bottomSentinelRef }: UseSectionTrackingOptions) {
  const { setActiveSectionId } = useActiveSection();

  useEffect(() => {
    const container = getScrollContainer(isMobile);
    const sentinel = bottomSentinelRef.current;
    if (!container || !sentinel) return;

    let rafId: number | null = null;
    let isAtBottom = false;

    const update = () => {
      rafId = null;
      const activeId = getActiveSectionId(container, sections, isAtBottom);
      setActiveSectionId(activeId);
      if (activeId) {
        window.history.replaceState(null, '', `${window.location.pathname}#${activeId}`);
      } else {
        window.history.replaceState(null, '', window.location.pathname);
      }
    };

    const scheduleUpdate = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(update);
    };

    const bottomObserver = new IntersectionObserver(
      ([sentinelEntry]) => {
        isAtBottom = sentinelEntry.isIntersecting;
        scheduleUpdate();
      },
      { root: container, threshold: 0 },
    );
    bottomObserver.observe(sentinel);

    container.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      bottomObserver.disconnect();
      container.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
    };
  }, [isMobile, sections, bottomSentinelRef, setActiveSectionId]);
}
