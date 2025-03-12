'use client';

import { Button } from '@/components/button';
import { MenuSolid, X } from '@mynaui/icons-react';

import { BREAKPOINT } from '@/constants';
import { LandingPosition } from '@/types/landingPosition';
import { useEffect, useState } from 'react';
import { useWindowSize } from 'usehooks-ts';
import { LandingSpot } from '../landing-spot';
import { Brand } from './brand';
import { useNavItems } from './nav-items';

export const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { width } = useWindowSize({ debounceDelay: 50 });
  useEffect(() => {
    if (width > BREAKPOINT.md && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [width]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const { navLinks, controls, allItems } = useNavItems();

  return (
    <nav className="relative z-50 flex h-[var(--navbar-height)] items-center justify-between">
      {/* <Brand className={'size-11 min-w-11 md:size-16'} /> */}
      <LandingSpot
        name={LandingPosition.Brand}
        left={-37}
        className="translate-y-5"
        position="relative"
        hasDiamond={false}
      />
      <Button
        icon={isMobileMenuOpen ? <X /> : <MenuSolid />}
        className="md:hidden"
        onClick={toggleMobileMenu}
      />
      <div className="hidden gap-3 md:flex">
        {allItems.map((item) => (
          <div key={item.key}>{item.component}</div>
        ))}
      </div>
      {isMobileMenuOpen && (
        <div className="bg-accent/80 border-secondary/10 absolute top-full w-full rounded border px-4 shadow-lg backdrop-blur-lg md:hidden">
          {navLinks.map((link) => (
            <div
              key={link.key}
              className="border-secondary/10 border-b py-2 [&_*]:w-full"
            >
              {link.component}
            </div>
          ))}
          <div className="my-4 flex flex-wrap justify-around gap-4">
            {controls.map((control) => (
              <div key={control.key}>{control.component}</div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
