import { motion } from 'motion/react';
import { useState } from 'react';

import { hslVarToHex } from '@/lib/style-utils';
import { ActiveIndicator } from './active-indicator';
import { TabContent } from './tab-content';

interface TabGroupProps {
  tabs: {
    label: string;
    value: string;
    content: { header: string; body: string | React.ReactNode };
  }[];
  onValueChange?: (value: string) => void;
  defaultTab?: number;
}

const indicatorWidth = 24;
const trackWidthOffset = 0.2;
const trackWidth = indicatorWidth * trackWidthOffset;
const transitionProps = { duration: 0.4, easing: 'easeInOut' };

export const Tabs = ({ ...props }: TabGroupProps) => {
  const { tabs, defaultTab } = props;
  const [selectedTab, setSelectedTab] = useState(defaultTab || 0);

  return (
    <div className="flex h-96 gap-12">
      <div className="rounded">
        <nav className="relative h-full">
          <ul className="flex h-full flex-col justify-between">
            {tabs.map(({ value, label }, idx) => (
              <li
                key={value}
                className="z-10 flex cursor-pointer items-center gap-4 py-2"
                onClick={() => setSelectedTab(idx)}
              >
                <ActiveIndicator
                  width={indicatorWidth}
                  trackWidthOffset={trackWidthOffset}
                  value={value}
                  isActive={idx === selectedTab}
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
                      idx === selectedTab
                        ? hslVarToHex('--secondary')
                        : hslVarToHex('--primary'),
                  }}
                  transition={transitionProps}
                >
                  {label}
                </motion.div>
              </li>
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
      <TabContent
        value={tabs[selectedTab].value}
        header={tabs[selectedTab].content.header}
        transitionProps={transitionProps}
      >
        {tabs[selectedTab].content.body}
      </TabContent>
    </div>
  );
};
