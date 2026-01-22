"use client";

import { CONTACT_LINKS } from "@/components/ContactLinks";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { IconButton } from "../IconButton";

export const MobileHeader = ({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={className}>
      <Link
        href="/"
        className="text-text-muted hover:text-secondary transition-colors text-xl"
      >
        JG
      </Link>
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <IconButton icon={<Menu className="size-6" />} />
        </DropdownMenuTrigger>
        {isOpen && (
          <DropdownMenuContent
            disableAnimation
            sideOffset={46}
            className="w-screen rounded-none border-x-0"
            asChild
          >
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
              style={{ overflow: "hidden" }}
            >
              <div className="p-1 flex justify-around">
                {CONTACT_LINKS.map((link) => {
                  const Icon = link.icon;
                  return (
                    <DropdownMenuItem key={link.label} asChild>
                      <a href={link.href} className="flex items-center gap-2">
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
