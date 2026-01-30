'use client';

import { SiteSections } from '@/constants';
import { createContext, ReactNode, useContext, useState } from 'react';

type ActiveSectionContextType = {
  activeSectionId: SiteSections | null;
  setActiveSectionId: (section: SiteSections | null) => void;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | undefined>(undefined);

export function ActiveSectionProvider({ children }: { children: ReactNode }) {
  const [activeSectionId, setActiveSectionId] = useState<SiteSections | null>(null);

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
