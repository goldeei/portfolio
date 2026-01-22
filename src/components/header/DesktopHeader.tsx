import { FileUser, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { IconLink } from "../IconLink";

export const DesktopHeader = ({className}: {className?: string}) => {
  return (
    <div className={className}> 
      <Link href="/" className='text-text-muted hover:text-secondary transition-colors text-xl'>Jake Goldfarb</Link>
      <ul className="flex gap-9">
        <li>
            <IconLink href="#" icon={<FileUser className="size-6" />} />    
        </li>
        <li>
          <IconLink href="#" icon={<Mail className="size-6" />} />
        </li>
        <li>
          <IconLink href="#" icon={<Github className="size-6" />} />
        </li>
        <li>
          <IconLink href="#" icon={<Linkedin className="size-6" />} />
          </li>
      </ul>
    </div>
  );
};