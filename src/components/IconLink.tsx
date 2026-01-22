import { cn } from "@/lib/utils";
import Link from "next/link";

export const IconLink = ({ href, icon, className }: { href: string; icon: React.ReactNode; className?: string }) => {
  return (
    <Link href={href} className={cn('interactive-element p-1.5', className)}  >
      <div className="size-6">
        {icon}
      </div>
    </Link>
  );
};