import { getScrollContainer } from '@/lib/scroll-utils';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { NavItemProps } from './types';

const navItemVariants = cva('relative uppercase', {
  variants: {
    variant: {
      desktop: 'text-lg ps-4',
      mobile: 'ps-8',
    },
  },
});

const activeIndicatorVariants = cva('bg-secondary absolute top-1/2 w-1 -translate-y-1/2 ', {
  variants: {
    variant: {
      desktop: 'h-12 w-1 rounded -left-[3px] ',
      mobile: 'size-3 rounded-full left-1.5',
    },
  },
});

export const NavItem = ({
  label,
  href,
  id,
  isActive,
  variant,
  onClick,
}: NavItemProps & { isActive: boolean; onClick: () => void; variant?: 'desktop' | 'mobile' }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    const sectionElement = document.getElementById(id);
    if (!sectionElement) return;
    
    const scrollContainer = getScrollContainer();
    if (!scrollContainer) return;
    
    // Calculate position relative to scroll container
    const containerTop = scrollContainer.getBoundingClientRect().top;
    const sectionTop = sectionElement.getBoundingClientRect().top;
    const targetScroll = scrollContainer.scrollTop + (sectionTop - containerTop);
    
    // Smooth scroll to target
    scrollContainer.scrollTo({ top: targetScroll, behavior: 'smooth' });
    
    // Call the onClick callback (for mobile menu closing)
    onClick();
  };

  return (
    <li className={cn(navItemVariants({ variant }))}>
      {isActive && (
        <motion.div 
          layoutId={`side-nav-item-active-indicator-${variant || 'desktop'}`}
          initial={false}
          className={cn(activeIndicatorVariants({ variant }))} 
        />
      )}
      <a
        href={href}
        className={cn('text-muted hover:text-gray-700', isActive && 'hover:text-text-primary/90 text-text-primary')}
        onClick={handleClick}
      >
        <motion.div initial={false} animate={{ scale: isActive ? 1.1 : 1 }} style={{ originX: 0, originY: 0.5 }}>
          {label}
        </motion.div>
      </a>
    </li>
  );
};
