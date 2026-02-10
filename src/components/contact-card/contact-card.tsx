'use client';

import { CONTACT_LINKS } from '@/constants';
import { cn } from '@/lib/utils';
import { User } from 'lucide-react';
import Link from 'next/link';
import { Typography } from '../typography';
import { DownloadVCardButton } from './v-card';

const contactLinkClasses = 'hover:text-secondary contents transition-colors';

const ContactInfoSection = () => {
  return (
    <div className="grid grid-cols-[auto_1fr] items-center gap-x-3 gap-y-6">
      {CONTACT_LINKS.map(({ icon, label, displayText, className, ...linkProps }) => {
        const IconComponent = icon;
        return (
          <Link key={label} {...linkProps} className={cn(contactLinkClasses, className)} aria-label={label}>
            <IconComponent className="size-5" />
            <span className="text-sm">{displayText ?? label}</span>
          </Link>
        );
      })}
    </div>
  );
};

export const ContactCard = () => {
  return (
    <div className="relative flex w-fit flex-col justify-center rounded-3xl bg-black/15 p-8 shadow-2xl sm:flex-row sm:items-center">
      <DownloadVCardButton variant="outline" size="icon" className="absolute right-2 bottom-2 rounded-full" />
      <div className="flex h-full flex-col items-center justify-center border-b pb-4 md:mr-8 md:border-r md:border-b-0 md:pr-8 md:pb-0">
        <div className="mb-4 flex size-20 items-center justify-center rounded-full border border-black bg-black/40 shadow">
          <User size={64} className="text-primary" />
        </div>
        <div className="text-primary text-xl font-medium">Jake Goldfarb</div>
        <Typography variant="subtitle" className="text-center text-sm">
          Frontend Engineer
        </Typography>
        {/* TODO replace with logo/image/something */}
      </div>
      <div className="flex flex-col justify-center gap-4 pt-4 md:py-6">
        <ContactInfoSection />
      </div>
    </div>
  );
};
