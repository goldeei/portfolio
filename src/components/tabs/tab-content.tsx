import { AnimatePresence, motion } from 'motion/react';
import { transitionProps } from './constants';

interface TabContentProps {
  value: string;
  header: string;
  children: string | React.ReactNode;
}
export const TabContent = ({ ...props }: TabContentProps) => {
  const { value, header, children } = props;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={value}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        className="text-secondary"
        transition={transitionProps}
      >
        <div className="mb-4 text-lg font-medium">{header}</div>
        <div>{children}</div>
      </motion.div>
    </AnimatePresence>
  );
};
