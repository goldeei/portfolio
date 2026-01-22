import clsx from "clsx";
import Link from "next/link";

export const IconLink = ({ href, icon, className }: { href: string; icon: React.ReactNode; className?: string }) => {
  return (
    <Link href={href} className={clsx('text-text-muted hover:text-secondary transition-colors shadow-2xl hover:shadow-secondary/90 size-6', className)}  >
      {icon}
    </Link>
  );
};