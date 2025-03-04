import { motion } from 'motion/react';

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
          : 'var(--color-secondary-60)',
        scale: isActive ? 1.025 : 1,
      }}
      transition={{
        ease: 'backIn',
      }}
      className="whitespace-nowrap"
    >
      <div className="font-medium uppercase">{label}</div>
      {subLabel && (
        <div className="text-xs leading-2 font-light">{subLabel}</div>
      )}
    </motion.div>
  );
};
