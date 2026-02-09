'use client';

import { useActiveSection } from '@/context';
import { NAV_ITEMS } from './constants';
import { NavItem } from './nav-item';
import { NavList } from './nav-list';

export const Nav = ({ variant, onNavigate }: { variant: 'desktop' | 'mobile'; onNavigate?: () => void }) => {
  const { activeSectionId } = useActiveSection();

  return (
    <NavList variant={variant}>
      {NAV_ITEMS.map((item) => (
        <NavItem
          key={item.id}
          {...item}
          isActive={activeSectionId === item.id}
          onClick={() => onNavigate?.()}
          variant={variant}
        />
      ))}
    </NavList>
  );
};
