import { Github, Linkedin, LucideIcon, Mail, Phone } from 'lucide-react';
import { LinkProps } from 'next/link';
import { AnchorHTMLAttributes } from 'react';

export type ContactLink = LinkProps &
  Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'rel' | 'target'> & {
    icon: LucideIcon;
    label: string;
    className?: string;
    displayText?: string;
  };

export const CONTACT_LINKS: ContactLink[] = [
  {
    href: 'mailto:jgoldfarb.dev@gmail.com',
    icon: Mail,
    label: 'Email',
    displayText: 'jgoldfarb.dev@gmail.com',
  },
  {
    href: 'https://github.com/goldeei',
    icon: Github,
    label: 'GitHub',
    rel: 'noopener noreferrer',
    displayText: 'github.com/goldeei',
    target: '_blank',
  },
  {
    href: 'https://www.linkedin.com/in/jakegoldfarb/',
    icon: Linkedin,
    label: 'LinkedIn',
    rel: 'noopener noreferrer',
    displayText: 'linkedin.com/in/jakegoldfarb/',
    target: '_blank',
  },
  {
    href: 'tel:+17323547973',
    icon: Phone,
    label: 'Phone',
    displayText: '(732) 354-7973',
  },
];
