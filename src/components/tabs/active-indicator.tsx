import { cn } from '@/lib/style-utils';
import { AnimatePresence, motion } from 'motion/react';
interface ActiveIndicatorProps {
  value: string;
  isActive: boolean;
  orientation: 'vertical' | 'horizontal';
}

export const ActiveIndicator = ({ ...props }: ActiveIndicatorProps) => {
  const { isActive, value, orientation } = props;

  return (
    <div
      className={cn(
        'bg-accent relative flex items-center justify-center rounded-full inset-shadow-sm transition-colors [&>div]:absolute [&>div]:rounded-full',
        orientation === 'vertical'
          ? 'h-11 w-5 [&>div]:h-9 [&>div]:w-3'
          : 'h-3 w-10 [&>div]:h-3 [&>div]:w-9',
      )}
    >
      <div
        className={cn(
          'to-secondary/95 from-secondary/30 outline-secondary/50 h-14 bg-linear-to-t from-90% via-100% to-117% shadow inset-shadow-sm outline',
        )}
      />
      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            key={value}
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            exit={{ opacity: 0 }}
            transition={{
              ease: 'backIn',
            }}
            className="bg-secondary/95 shadow-secondary shadow"
          />
        )}
      </AnimatePresence>
    </div>
  );
};
