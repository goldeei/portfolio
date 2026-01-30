import { SiteSections } from '@/constants';
import { NavItemProps } from './types';

export const NAV_ITEMS: NavItemProps[] = [
  {
    label: 'About Me',
    href: '#about-me',
    id: SiteSections.ABOUT_ME,
  },
  { label: 'Experience', href: '#experience', id: SiteSections.EXPERIENCE },
  { label: "Let's Connect", href: '#lets-connect', id: SiteSections.LETS_CONNECT },
] as const;
