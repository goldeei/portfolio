import { useIsMobile } from '@/hooks';
import { scrollToTop } from '@/lib/scroll-utils';
import { ContactLinks } from '../contact-links';
import { BrandIcon } from '../icons';
import { Button } from '../ui/button';
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
        <Button
          variant="ghost"
          size="icon"
          className="text-primary hover:text-primary-hover size-8 rounded-full transition-colors hover:bg-transparent"
          asChild
        >
          <a href="/" onClick={handleBrandClick}>
            <BrandIcon className="size-full" />
          </a>
        </Button>
        <MobileHeader className="flex items-center justify-between sm:hidden" />
        <ContactLinks className="hidden sm:flex" />
      </div>
    </nav>
  );
};
