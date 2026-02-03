'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CONTACT_LINKS } from '@/constants';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Nav } from '../nav';

export const MobileHeader = ({
  className,
  handleBrandClick,
}: {
  className?: string;
  handleBrandClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={className}>
      <a href="#" onClick={handleBrandClick} className="text-text-muted hover:text-secondary text-xl transition-colors">
        JG
      </a>
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Menu className="size-9" />
        </DropdownMenuTrigger>
        {isOpen && (
          <DropdownMenuContent
            disableAnimation
            sideOffset={30}
            className="w-svw overflow-hidden rounded-none border-x-0 sm:hidden"
            asChild
          >
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.1, ease: 'easeOut' }}
            >
              <Nav />
              <div className="border-border flex justify-around border-t py-4">
                {CONTACT_LINKS.map((link) => {
                  const Icon = link.icon;
                  return (
                    <DropdownMenuItem key={link.label} asChild className="flex-1">
                      <a href={link.href.toString()} className="flex items-center justify-center gap-2">
                        <Icon className="size-6" />
                      </a>
                    </DropdownMenuItem>
                  );
                })}
              </div>
            </motion.div>
          </DropdownMenuContent>
        )}
      </DropdownMenu>
    </div>
  );
};
