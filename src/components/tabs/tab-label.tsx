import { hslVarToHex } from '@/lib/style-utils';
import { motion } from 'motion/react';
import { transitionProps } from './constants';

interface TabLabelProps {
  isActive: boolean;
  label: string;
  subLabel?: string;
}

export const TabLabel = ({ ...props }: TabLabelProps) => {
  const { isActive, label, subLabel } = props;

  return (
    <motion.div
      initial={false}
      animate={{
        color: isActive
          ? 'var(--color-secondary)'
          : 'var(--color-secondary-80)',
        scale: isActive ? 1.025 : 1,
      }}
      transition={transitionProps}
    >
      <div className="font-medium uppercase">{label}</div>
      {subLabel && (
        <div className="text-xs leading-2 font-light whitespace-nowrap">
          {subLabel}
        </div>
      )}
    </motion.div>
  );
};
