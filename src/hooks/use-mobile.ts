'use client';

import { useMediaQuery } from '@mantine/hooks';
import { useEffect, useState } from 'react';

const DEFAULT_MOBILE_BREAKPOINT = '40rem';

export function useIsMobile() {
  const [mobileBreakpoint, setMobileBreakpoint] = useState<string>(DEFAULT_MOBILE_BREAKPOINT);

  useEffect(() => {
    const value = getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-sm').trim();
    setMobileBreakpoint(value || DEFAULT_MOBILE_BREAKPOINT);
  }, []);

  const isMobile = useMediaQuery(`(max-width: ${mobileBreakpoint})`);

  return isMobile;
}
