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
        className="relative overflow-auto py-8 text-secondary"
        transition={transitionProps}
      >
        <h3 className="sticky inset-0 bg-background pb-1 text-2xl font-medium">
          {header}
        </h3>
        <div>{children}</div>
      </motion.div>
    </AnimatePresence>
  );
};
