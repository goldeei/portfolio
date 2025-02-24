import { hslVarToHex } from '@/lib/style-utils';
import { motion } from 'motion/react';
interface ActiveIndicatorProps {
  width: number;
  trackWidthOffset: number;
  value: string;
  selectedTab: string;
  transitionProps: { duration: number; easing: string };
}

export const ActiveIndicator = ({ ...props }: ActiveIndicatorProps) => {
  const { width, trackWidthOffset, value, selectedTab, transitionProps } =
    props;

  return (
    <div
      className="rounded-full bg-accent shadow-inner transition-colors"
      style={{ width, height: width }}
    >
      {value === selectedTab && (
        <motion.div
          layoutId="active-indicator"
          id="active-indicator"
          transition={transitionProps}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width={'100%'}
            height={'100%'}
            viewBox={`0 0 100 100`}
            fill={hslVarToHex('--secondary')}
          >
            <motion.ellipse
              cx="50"
              cy="50"
              ry="40"
              animate={{
                rx: [40, 60 * trackWidthOffset, 60 * trackWidthOffset, 40],
                ry: [40, 60 * trackWidthOffset, 60 * trackWidthOffset, 40],
              }}
              transition={{
                ...transitionProps,
                times: [0, 0.2, 0.8, 1],
              }}
            />
          </motion.svg>
        </motion.div>
      )}
    </div>
  );
};
