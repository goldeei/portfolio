"use client"

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { useMemo, useState } from "react";
import { HeroContent } from "./HeroContent";

const items: { id: string, label: string; href: string }[] = [
  {
    label: 'About Me',
    href: '#about-me',
    id: 'about-me',
  },
  {label: "Experience", href: '#experience', id: 'experience'},
  {label: "Let's Connect", href: '#lets-connect', id: 'lets-connect'},
];

const SideNavItem = ({ label, href, id, activeItem, setActiveItem }: { label: string; href: string; id: string; activeItem: string | null; setActiveItem: (id: string) => void }) => {
  const isActiveItem = useMemo(() => activeItem === id, [activeItem, id]);  
  return (
    <li className="relative ps-9">
        {isActiveItem && <motion.div layoutId="side-nav-item-active-indicator" className="absolute -left-0.5 top-1/2 -translate-y-1/2 h-12 w-1 bg-secondary rounded" />}
        <Link  href={href} className={cn("text-2xl text-muted hover:text-gray-700", isActiveItem  && "text-text-primary hover:text-muted")} onClick={() => setActiveItem(id)}>
          <motion.div animate={{ scale: isActiveItem ? 1.1 : 1 }} >{label}</motion.div>
        </Link>
    </li>
  );
};

export const SideNav = () => {
const [activeItem, setActiveItem] = useState<typeof items[number]['href'] | null>(null);

  return (
     <aside className="flex flex-col gap-4">
        <HeroContent />
        <ul className="border-l py-12 flex flex-col gap-12">
            {items.map((item) => (
                <SideNavItem key={item.href} label={item.label} href={item.href} id={item.id} activeItem={activeItem} setActiveItem={setActiveItem} />
            ))}
        </ul>
     </aside>
  );
};
