import { FileUser, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

const HeaderLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => {
  return (
    <Link href={href} className='text-text-muted hover:text-secondary transition-colors shadow-2xl hover:shadow-secondary/90'>
      {icon}
    </Link>
  );
};

export const Header = () => {
  return (
    <nav className="flex items-center justify-between py-9 border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm shadow-2xl px-4"> 
      <Link href="/" className='text-text-muted hover:text-secondary transition-colors text-xl'>Jake Goldfarb</Link>
      <ul className="flex gap-9">
        <li>
            <HeaderLink href="#" icon={<FileUser className="size-6" />} />    
        </li>
        <li>
          <HeaderLink href="#" icon={<Mail className="size-6" />} />
        </li>
        <li>
          <HeaderLink href="#" icon={<Github className="size-6" />} />
        </li>
        <li>
          <HeaderLink href="#" icon={<Linkedin className="size-6" />} />
          </li>
      </ul>
    </nav>
  );
};
