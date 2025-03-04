import { useState } from 'react';

import { cn } from '@/lib/style-utils';
import { motion } from 'motion/react';
import { ActiveIndicator } from './active-indicator';
import { TabContent } from './tab-content';
import { TabLabel } from './tab-label';
export interface TabGroupProps {
  tabs: {
    label: string;
    subLabel?: string;
    value: string;
    content: { header: string; body: string | React.ReactNode };
  }[];
  orientation?: 'vertical' | 'horizontal';
  onValueChange?: (value: string) => void;
  defaultTab?: number;
}

export const Tabs = ({ ...props }: TabGroupProps) => {
  const { tabs, defaultTab, orientation = 'vertical' } = props;

  const [currentTabIdx, setCurrentTabIdx] = useState(defaultTab || 0);
  const [direction, setDirection] = useState(0);

  const handleTabChange = (selectedTabIdx: number) => {
    if (selectedTabIdx === currentTabIdx) return;

    selectedTabIdx < currentTabIdx ? setDirection(-1) : setDirection(1);
    setCurrentTabIdx(selectedTabIdx);
  };

  return (
    <div
      className={cn(
        'flex h-full gap-8',
        orientation === 'horizontal' && 'flex-col',
      )}
    >
      <nav>
        <ul
          className={cn(
            'relative mb-4 flex h-full flex-col',
            orientation === 'horizontal' &&
              'w-full flex-row justify-start overflow-x-auto pb-2',
          )}
        >
          {tabs.map(({ value, label, subLabel }, idx) => (
            <motion.li
              key={value}
              className={cn(
                'relative flex cursor-pointer',
                orientation === 'horizontal'
                  ? 'flex-col-reverse justify-between px-6'
                  : 'items-center gap-2 py-6',
              )}
              onClick={() => handleTabChange(idx)}
            >
              <ActiveIndicator
                value={value}
                isActive={idx === currentTabIdx}
                orientation={orientation}
              />
              <TabLabel
                label={label}
                subLabel={subLabel}
                isActive={idx === currentTabIdx}
              />
              <div
                className={cn(
                  'absolute -z-10 box-border flex',
                  orientation === 'horizontal'
                    ? 'right-0 bottom-0 h-5 w-full items-center'
                    : 'top-0 left-0 h-full w-5 justify-center',
                )}
              >
                <div
                  className={cn(
                    'bg-accent absolute',
                    orientation === 'horizontal' ? 'h-1 w-full' : 'h-full w-1',
                  )}
                />
              </div>
            </motion.li>
          ))}
        </ul>
      </nav>
      <TabContent
        value={tabs[currentTabIdx].value}
        header={tabs[currentTabIdx].content.header}
      >
        {tabs[currentTabIdx].content.body}
      </TabContent>
    </div>
  );
};
