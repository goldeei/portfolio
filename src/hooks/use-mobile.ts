'use client';

import { useEffect, useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';

const DEFAULT_MOBILE_BREAKPOINT = '40rem';

export function useIsMobile() {
  const [mobileBreakpoint, setMobileBreakpoint] = useState<string>(DEFAULT_MOBILE_BREAKPOINT);

  useEffect(() => {
    const value = getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-sm').trim();
    setMobileBreakpoint(value || DEFAULT_MOBILE_BREAKPOINT);
  }, []);

  const isMobile = useMediaQuery(`(max-width: ${mobileBreakpoint})`, {
    initializeWithValue: false,
  });

  return isMobile;
}
