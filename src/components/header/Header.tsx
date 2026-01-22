import { DesktopHeader } from "./DesktopHeader";
import { MobileHeader } from "./MobileHeader";

export const Header = () => {
  return (
    <nav className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm shadow-2xl px-4 py-9">
        <DesktopHeader className="hidden sm:flex  items-center justify-between"/>
        <MobileHeader className="flex items-center justify-between sm:hidden" />
    </nav>
  );
};