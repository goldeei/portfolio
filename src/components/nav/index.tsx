'use client';

import { CubeIcon } from '@/assets/icons';
import { Button } from '@/components/button';
import { Switch } from '@/components/switch';
import { useR3fState } from '@/context/r3fProvider';
import { DownloadSolid, MenuSolid } from '@mynaui/icons-react';

import { useEffect, useState } from 'react';
import { useWindowSize } from 'usehooks-ts';
import { Brand } from './brand';
import { useNavItems } from './nav-items';

export const Nav = () => {
  const [r3fState, updateR3fState] = useR3fState();
  const { isCanvasOnTop, isOrbitControlEnabled } = r3fState;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { width } = useWindowSize();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const { navLinks, controls, allItems } = useNavItems();

  useEffect(() => {
    console.log(isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  return (
    <nav className="relative z-50 flex h-[var(--navbar-height)] items-center justify-between">
      <Brand />
      <Button
        icon={<MenuSolid />}
        className="md:hidden"
        onClick={toggleMobileMenu}
      />
      <div className="hidden gap-3 md:flex">
        {allItems.map((item) => (
          <div key={item.key}>{item.component}</div>
        ))}
      </div>
      {isMobileMenuOpen && (
        <div className="bg-accent/80 absolute top-full w-full rounded p-4 shadow-lg backdrop-blur-lg md:hidden">
          {navLinks.map((link) => (
            <div
              key={link.key}
              className="border-secondary/20 border-b py-2 [&_*]:w-full"
            >
              {link.component}
            </div>
          ))}
          <div className="mt-4 flex flex-wrap justify-around gap-2">
            {controls.map((control) => (
              <div key={control.key}>{control.component}</div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
