import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { NavItemProps } from './types';

const navItemVariants = cva('relative', {
  variants: {
    variant: {
      desktop: 'text-xl ps-4',
      mobile: 'text-lg ps-8',
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
  return (
    <li className={cn(navItemVariants({ variant }))}>
      {isActive && (
        <motion.div layoutId="side-nav-item-active-indicator" className={cn(activeIndicatorVariants({ variant }))} />
      )}
      <a
        href={href}
        className={cn('text-muted hover:text-gray-700', isActive && 'hover:text-text-primary/90 text-text-primary')}
        onClick={onClick}
      >
        <motion.div initial={false} animate={{ scale: isActive ? 1.1 : 1 }} style={{ originX: 0, originY: 0.5 }}>
          {label}
        </motion.div>
      </a>
    </li>
  );
};
