import { cn } from '@/lib/style-utils';
import { AnimatePresence, motion } from 'motion/react';
interface ActiveIndicatorProps {
  value: string;
  isActive: boolean;
  isVertical: boolean;
}

export const ActiveIndicator = ({ ...props }: ActiveIndicatorProps) => {
  const { isActive, value, isVertical } = props;

  return (
    <div
      className={cn(
        'flex',
        isVertical ? 'h-5 items-center justify-center' : 'w-5 justify-center',
      )}
    >
      <div
        className={cn(
          'bg-accent relative flex items-center justify-center rounded-full inset-shadow-sm transition-colors [&>div]:absolute [&>div]:rounded-full',
          isVertical
            ? 'h-3 w-10 [&>div]:h-3 [&>div]:w-9'
            : 'h-11 w-5 [&>div]:h-9 [&>div]:w-3',
        )}
      >
        <div className="glass h-14 shadow" />
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
              className="glass glass-active"
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
