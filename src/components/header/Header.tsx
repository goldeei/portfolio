import { useIsMobile } from '@/hooks';
import { scrollToTop } from '@/lib/scroll-utils';
import { DesktopHeader } from './desktop-header';
import { MobileHeader } from './mobile-header';

export const Header = () => {
  const isMobile = useIsMobile();

  const handleBrandClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.history.pushState(null, '', window.location.pathname);
    scrollToTop();
  };

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 h-(--header-height)">
      <div className="border-border bg-overlay site-container flex h-full items-center justify-between border-b shadow-2xl">
        {isMobile ? (
          <MobileHeader className="flex w-full items-center justify-between" handleBrandClick={handleBrandClick} />
        ) : (
          <DesktopHeader className="flex w-full items-center justify-between" handleBrandClick={handleBrandClick} />
        )}
      </div>
    </nav>
  );
};
