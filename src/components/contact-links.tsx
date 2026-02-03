import { CONTACT_LINKS } from '@/constants';
import { IconLink } from './icon-link';

export const ContactLinks = () => {
  return (
    <ul className="flex gap-8">
      {CONTACT_LINKS.map((link) => {
        const Icon = link.icon;
        return (
          <li key={link.label} className="flex items-center">
            <IconLink href={link.href} icon={<Icon className="size-6" />} label={link.label} />
          </li>
        );
      })}
    </ul>
  );
};
