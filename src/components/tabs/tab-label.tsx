import { hslVarToHex } from '@/lib/style-utils';
import { motion } from 'motion/react';
import { transitionProps } from './constants';

interface TabLabelProps {
  label: string;
  isActive: boolean;
}

export const TabLabel = ({ ...props }: TabLabelProps) => {
  const { isActive, label } = props;

  return (
    <motion.div
      initial={false}
      className="text-sm font-bold uppercase"
      animate={{
        color: isActive
          ? hslVarToHex('--color-secondary')
          : hslVarToHex('--color-primary'),
      }}
      transition={transitionProps}
    >
      {label}
    </motion.div>
  );
};
