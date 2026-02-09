import { SCROLL_CONTAINER_ATTR, SCROLL_CONTAINER_TYPES } from '@/constants/dom';

/**
 * Find the correct scroll container based on viewport
 * Uses data-scroll-container attribute to identify containers
 */
export function getScrollContainer(isMobile: boolean): HTMLElement | null {
  if (typeof window === 'undefined') return null;
  const containerType = isMobile ? SCROLL_CONTAINER_TYPES.MOBILE : SCROLL_CONTAINER_TYPES.DESKTOP;

  return document?.querySelector(`[${SCROLL_CONTAINER_ATTR}="${containerType}"]`) as HTMLElement;
}

/**
 * Scroll to the top of the page, respecting the current scroll container
 */
export function scrollToTop(isMobile: boolean, behavior: ScrollBehavior = 'smooth'): void {
  if (typeof window === 'undefined') return;
  
  const scrollContainer = getScrollContainer(isMobile);
  if (scrollContainer) {
    scrollContainer.scrollTo({ top: 0, behavior });
  } else {
    // Final fallback to window scroll
    window.scrollTo({ top: 0, behavior });
  }
}

/**
 * Check if scroll container is near the top (useful for mobile hero detection)
 */
export function isScrollContainerNearTop(isMobile: boolean, threshold: number = 100): boolean {
  if (typeof window === 'undefined') return false;
  
  const scrollContainer = getScrollContainer(isMobile);
  return scrollContainer ? scrollContainer.scrollTop < threshold : false;
}
