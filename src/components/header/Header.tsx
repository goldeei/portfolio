import { useActiveSection } from '@/context';
import { useIsMobile } from '@/hooks';
import { DesktopHeader } from './desktop-header';
import { MobileHeader } from './mobile-header';

export const Header = () => {
  const isMobile = useIsMobile();

  const { setActiveSectionId } = useActiveSection();
  const handleBrandClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.history.pushState(null, '', window.location.pathname);
    setActiveSectionId(null);
    const mainElement = document.querySelector('main');
    mainElement?.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <nav className="fixed top-0 right-0 left-0 z-50">
      <div className="border-border bg-overlay site-container flex items-center justify-between border-b py-6 shadow-2xl">
        {isMobile ? (
          <MobileHeader className="flex w-full items-center justify-between" handleBrandClick={handleBrandClick} />
        ) : (
          <DesktopHeader className="flex w-full items-center justify-between" handleBrandClick={handleBrandClick} />
        )}
      </div>
    </nav>
  );
};
