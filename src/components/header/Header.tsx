import { DesktopHeader } from "./DesktopHeader";
import { MobileHeader } from "./MobileHeader";

export const Header = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm shadow-2xl flex items-center justify-between px-4 py-6">
        <DesktopHeader className="hidden sm:flex w-full items-center justify-between"/>
        <MobileHeader className="flex w-full items-center justify-between sm:hidden" />
    </nav>
  );
};