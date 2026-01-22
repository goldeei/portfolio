import { Menu } from "lucide-react";
import Link from "next/link";
import { IconButton } from "../IconButton";

export const MobileHeader = ({className}: {className?: string}) => {
  return (
    <div className={className}>
       <Link href="/" className='text-text-muted hover:text-secondary transition-colors text-xl'>JG</Link>
       <IconButton icon={<Menu className="size-6" />} />
    </div>
  );
};