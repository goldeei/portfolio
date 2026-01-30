'use client';

import { useActiveSection } from '@/context';
import { useIsMobile } from '@/hooks';
import { NAV_ITEMS } from './constants';
import { NavItem } from './nav-item';
import { NavList } from './nav-list';

export const Nav = () => {
  const isMobile = useIsMobile();
  const { activeSectionId, setActiveSectionId } = useActiveSection();

  return (
    <NavList variant={isMobile ? 'mobile' : 'desktop'}>
      {NAV_ITEMS.map((item) => (
        <NavItem
          key={item.id}
          {...item}
          isActive={activeSectionId === item.id}
          onClick={() => setActiveSectionId(item.id)}
          variant={isMobile ? 'mobile' : 'desktop'}
        />
      ))}
    </NavList>
  );
};
