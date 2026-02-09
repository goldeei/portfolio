/**
 * Find the correct scroll container based on current viewport
 * - Desktop: <main> element with overflow
 * - Mobile: .site-container with overflow
 */
export function getScrollContainer(): HTMLElement | null {
  // Try desktop main element first
  const mainElement = document.querySelector('main') as HTMLElement;
  if (mainElement && mainElement.scrollHeight > mainElement.clientHeight) {
    return mainElement;
  }

  // Fall back to mobile site-container
  return document.querySelector('.site-container.overflow-y-auto') as HTMLElement;
}

/**
 * Scroll to the top of the page, respecting the current scroll container
 */
export function scrollToTop(behavior: ScrollBehavior = 'smooth'): void {
  const scrollContainer = getScrollContainer();
  if (scrollContainer) {
    scrollContainer.scrollTo({ top: 0, behavior });
  } else {
    // Final fallback to window scroll
    window.scrollTo({ top: 0, behavior });
  }
}
