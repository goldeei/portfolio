'use client';

import { SiteSections } from '@/constants';
import { useHash } from '@mantine/hooks';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type ActiveSectionContextType = {
  activeSectionId: SiteSections | null;
  setActiveSectionId: (section: SiteSections | null) => void;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | undefined>(undefined);

export function ActiveSectionProvider({ children }: { children: ReactNode }) {
  const [activeSectionId, setActiveSectionId] = useState<SiteSections | null>(null);
  const [hash] = useHash();

  // Handle initial hash navigation only once on mount
  useEffect(() => {
    if (hash && Object.values(SiteSections).includes(hash as SiteSections)) {
      const sectionElement = document.getElementById(hash);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'auto' });
      }
    }
  }, []);

  return (
    <ActiveSectionContext.Provider value={{ activeSectionId, setActiveSectionId }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  const context = useContext(ActiveSectionContext);
  if (!context) {
    throw new Error('useActiveSection must be used within ActiveSectionProvider');
  }
  return context;
}
