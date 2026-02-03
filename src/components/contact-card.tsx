'use client';

import { CONTACT_LINKS } from '@/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const contactLinkClasses = 'hover:text-secondary contents transition-colors';

const ContactInfoSection = () => {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-6">
      <div className="text-text-secondary grid grid-cols-[auto_1fr] items-center gap-x-3 gap-y-2">
        {CONTACT_LINKS.map(({ icon, label, displayText, className, ...linkProps }) => {
          const IconComponent = icon;
          return (
            <Link key={label} {...linkProps} className={cn(contactLinkClasses, className)} aria-label={label}>
              <IconComponent className="size-6" />
              <span>{displayText ?? label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export const ContactCard = () => {
  return (
    <div className="border-primary text-primary aspect-video">
      <div className="flex gap-4 rounded-lg border p-4">
        <div className="flex flex-col items-center justify-center border-r pr-4">
          <div className="text-2xl font-medium">Jake Goldfarb</div>
          <div>Frontend Engineer</div>
        </div>
        <div className="w-80">
          <ContactInfoSection />
        </div>
      </div>
    </div>
  );
};
