import { useIsMobile } from '@/hooks';
import { scrollToTop } from '@/lib/scroll-utils';
import { ContactLinks } from '../contact-links';
import { BrandIcon } from '../icons';
import { MobileHeader } from './mobile-header';

export const Header = () => {
  const isMobile = useIsMobile();

  const handleBrandClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToTop(isMobile);
  };

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 h-(--header-height)">
      <div className="border-border bg-overlay site-container flex h-full items-center justify-between border-b shadow-2xl">
        <BrandIcon className="text-primary size-10 transition-transform hover:scale-105" />
        {isMobile ? (
          <MobileHeader className="flex items-center justify-between" handleBrandClick={handleBrandClick} />
        ) : (
          <ContactLinks />
        )}
      </div>
    </nav>
  );
};
