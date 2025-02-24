import { motion } from 'motion/react';
import { useMemo, useState } from 'react';

import { hslVarToHex } from '@/lib/style-utils';
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
const trackWidthOffset = 0.2;
const trackWidth = indicatorWidth * trackWidthOffset;
const transitionProps = { duration: 0.4, easing: 'easeInOut' };

export const Tabs = ({ ...props }: TabGroupProps) => {
  const { tabs, defaultValue } = props;
  const [selectedTab, setSelectedTab] = useState(defaultValue);

  const content = useMemo(
    () => tabs.find((tab) => tab.value === selectedTab)?.content,
    [selectedTab, tabs],
  );

  return (
    <div className="flex h-96 gap-12">
      <div className="rounded">
        <nav className="relative h-full">
          <ul className="flex h-full flex-col justify-between">
            {tabs.map(({ value, label }) => (
              <motion.li
                key={value}
                initial={false}
                className="z-10 flex cursor-pointer items-center gap-4 py-2"
                onClick={() => setSelectedTab(value)}
              >
                <ActiveIndicator
                  width={indicatorWidth}
                  trackWidthOffset={trackWidthOffset}
                  value={value}
                  selectedTab={selectedTab}
                  transitionProps={transitionProps}
                />
                <motion.div
                  initial={false}
                  className="text-sm font-bold uppercase"
                  whileHover={{
                    textDecoration: 'underline',
                    textUnderlineOffset: '4px',
                  }}
                  animate={{
                    color:
                      value === selectedTab
                        ? hslVarToHex('--secondary')
                        : hslVarToHex('--primary'),
                  }}
                  transition={transitionProps}
                >
                  {label}
                </motion.div>
              </motion.li>
            ))}
          </ul>
          <div
            className="absolute h-full rounded-full bg-accent"
            style={{
              width: trackWidth,
              left: (indicatorWidth - trackWidth) / 2,
              top: 0,
            }}
          />
        </nav>
      </div>
      <div>{content}</div>
    </div>
  );
};
