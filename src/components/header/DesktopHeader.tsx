import Link from "next/link";
import { ContactLinks } from "../ContactLinks";

export const DesktopHeader = ({className}: {className?: string}) => {
  return (
    <div className={className}> 
      <Link href="/" className='text-text-muted hover:text-secondary transition-colors text-xl'>Jake Goldfarb</Link>
     <ContactLinks />
    </div>
  );
};