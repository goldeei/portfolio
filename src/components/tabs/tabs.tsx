import { cn } from '@/lib/style-utils';
import { motion } from 'motion/react';
import { useEffect, useMemo, useRef, useState } from 'react';

import { ActiveIndicator } from './active-indicator';

interface TabGroupProps {
  tabs: {
    label: string;
    value: string;
    content: React.ReactNode;
  }[];
  onValueChange?: (value: string) => void;
  defaultValue: string;
}

const indicatorWidth = 24;
const trackWidthOffset = 0.3;
const trackWidth = indicatorWidth * trackWidthOffset;

export const Tabs = ({ ...props }: TabGroupProps) => {
  const { tabs, defaultValue, onValueChange } = props;
  const [selectedTab, setSelectedTab] = useState(defaultValue);
  const handleChange = (v: string) => {
    setSelectedTab(v);
    if (onValueChange) {
      onValueChange(v);
    }
  };

  const content = useMemo(
    () => tabs.find((tab) => tab.value === selectedTab)?.content,
    [selectedTab, tabs],
  );

  return (
    <div className="flex h-96 gap-12">
      <nav>
        <ul className="relative flex h-full w-fit flex-col justify-between gap-0">
          {tabs.map(({ value, label }) => (
            <motion.li
              key={value}
              initial={false}
              className="flex cursor-pointer items-center justify-between gap-4 py-4"
              onClick={() => setSelectedTab(value)}
              whileHover={{ color: '#fff' }}
            >
              <motion.div
                initial={false}
                animate={{
                  color:
                    value === selectedTab
                      ? 'text-secondary'
                      : 'text-secondary/50',
                }}
              >
                {label}
              </motion.div>
              <ActiveIndicator
                width={indicatorWidth}
                trackWidthOffset={trackWidthOffset}
                value={value}
                selectedTab={selectedTab}
              />
            </motion.li>
          ))}
          <div
            className="absolute -z-50 h-full rounded-full bg-accent"
            style={{
              width: trackWidth,
              right: (indicatorWidth - trackWidth) / 2,
            }}
          />
        </ul>
      </nav>
      <div>{content}</div>
    </div>
  );
};
