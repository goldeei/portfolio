import { useState } from 'react';

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
    <div className="flex h-full gap-8">
      <nav className="relative">
        <ul className="relative flex h-full flex-col justify-center gap-12">
          <div className="absolute inset-0 -z-10 flex h-full w-5 justify-center">
            <div className="bg-accent absolute h-full w-1" />
          </div>
          {tabs.map(({ value, label, subLabel }, idx) => (
            <motion.li
              key={value}
              className="flex cursor-pointer items-center gap-4"
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
