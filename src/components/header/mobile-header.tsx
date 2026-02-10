'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { ContactLinks } from '../contact-links';
import { Nav } from '../nav';

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
      <div className={className}>
        <button
          ref={triggerRef}
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            'text-foreground hover:text-secondary interactive-element transition-colors',
            isOpen && 'text-secondary',
          )}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <Menu className="size-6" />
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="bg-overlay border-border fixed top-(--header-height) right-0 left-0 z-40 overflow-hidden border-b shadow-2xl sm:hidden"
          >
            <Nav variant="mobile" onNavigate={handleNavClick} />
            <ContactLinks className="border-border border-t py-2" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
