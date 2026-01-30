'use client';

import { ContactLinks } from '../ContactLinks';

export const DesktopHeader = ({
  className,
  handleBrandClick,
}: {
  className?: string;
  handleBrandClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) => {
  return (
    <div className={className}>
      <a href="#" onClick={handleBrandClick} className="text-text-muted hover:text-secondary text-xl transition-colors">
        Jake Goldfarb
      </a>
      <ContactLinks />
    </div>
  );
};
