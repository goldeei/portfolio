"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import { FileUser, Github, Linkedin, Mail, Menu } from "lucide-react";
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
              <div className="p-1">
                <DropdownMenuItem asChild>
                  <a href="#" className="flex items-center gap-2">
                    <FileUser className="size-4" />
                    Resume
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#" className="flex items-center gap-2">
                    <Mail className="size-4" />
                    Email
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#" className="flex items-center gap-2">
                    <Github className="size-4" />
                    GitHub
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#" className="flex items-center gap-2">
                    <Linkedin className="size-4" />
                    LinkedIn
                  </a>
                </DropdownMenuItem>
              </div>
            </motion.div>
          </DropdownMenuContent>
        )}
      </DropdownMenu>
    </div>
  );
};
