import { AnimatePresence, motion } from 'motion/react';

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
        className="text-secondary relative overflow-auto"
      >
        <h3 className="bg-background sticky inset-0 mb-4 text-2xl font-medium">
          {header}
        </h3>
        <div>{children}</div>
      </motion.div>
    </AnimatePresence>
  );
};
