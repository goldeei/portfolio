'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { BodyPortal } from '../body-portal';
import { ContactLinks } from '../contact-links';
import { Nav } from '../nav';
import { Button } from '../ui/button';

export const MobileHeader = ({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Custom click outside handler
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      // Don't close if clicking the trigger button or inside the menu
      if (triggerRef.current?.contains(target) || menuRef.current?.contains(target)) {
        return;
      }

      setIsOpen(false);
    };

    // Add listener immediately (but after this render cycle completes)
    // Use 'mousedown' to catch the event before any navigation happens
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleNavClick = () => {
    // Close menu immediately after navigation click
    setIsOpen(false);
  };

  return (
    <>
      <Button
        ref={triggerRef}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        className="aria-expanded:text-secondary"
      >
        <Menu className="size-5" />
      </Button>
      <BodyPortal>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={menuRef}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="border-border bg-overlay fixed top-(--header-height) right-0 left-0 z-40 overflow-hidden border-b shadow-2xl sm:hidden"
            >
              <Nav variant="mobile" onNavigate={handleNavClick} />
              <ContactLinks className="border-border border-t bg-black/20 py-2" />
            </motion.div>
          )}
        </AnimatePresence>
      </BodyPortal>
    </>
  );
};
