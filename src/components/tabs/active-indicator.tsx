import { hslVarToHex } from '@/lib/style-utils';
import { motion } from 'motion/react';
import { indicatorSize, trackWidthOffset, transitionProps } from './constants';

interface ActiveIndicatorProps {
  value: string;
  isActive: boolean;
}

export const ActiveIndicator = ({ ...props }: ActiveIndicatorProps) => {
  const { isActive, value } = props;

  return (
    <div
      className="bg-accent z-10 flex items-center justify-center rounded-full inset-shadow-sm transition-colors"
      style={{ width: indicatorSize, height: indicatorSize }}
    >
      {isActive && (
        <motion.div
          key={value}
          layoutId="active-indicator"
          id="active-indicator"
          className="border-secondary bg-secondary/80 size-full rounded-full border-2 shadow outline-2"
          animate={{
            width: [
              '90%',
              `${100 * trackWidthOffset}%`,
              `${100 * trackWidthOffset}%`,
              '90%',
            ],
            height: [
              '90%',
              `${100 * trackWidthOffset}%`,
              `${100 * trackWidthOffset}%`,
              '90%',
            ],
          }}
          transition={{
            ...transitionProps,
            times: [0, 0.2, 0.8, 1],
          }}
        />
      )}
    </div>
  );
};
