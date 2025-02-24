import { useState } from 'react';

import { ActiveIndicator } from './active-indicator';
import { indicatorSize, trackWidth } from './constants';
import { TabContent } from './tab-content';
import { TabLabel } from './tab-label';

export interface TabGroupProps {
  tabs: {
    label: string;
    value: string;
    content: { header: string; body: string | React.ReactNode };
  }[];
  onValueChange?: (value: string) => void;
  defaultTab?: number;
}

export const Tabs = ({ ...props }: TabGroupProps) => {
  const { tabs, defaultTab } = props;
  const [selectedTab, setSelectedTab] = useState(defaultTab || 0);

  return (
    <div className="flex gap-8">
      <div className="rounded bg-accent p-4">
        <nav className="relative h-full">
          <ul className="flex h-full flex-col justify-between">
            {tabs.map(({ value, label }, idx) => (
              <li
                key={value}
                className="z-10 flex cursor-pointer items-center gap-4 py-2"
                onClick={() => setSelectedTab(idx)}
              >
                <ActiveIndicator value={value} isActive={idx === selectedTab} />
                <TabLabel label={label} isActive={idx === selectedTab} />
              </li>
            ))}
          </ul>
          <div
            className="absolute h-full rounded-full bg-background"
            style={{
              width: trackWidth,
              left: (indicatorSize - trackWidth) / 2,
              top: 0,
            }}
          />
        </nav>
      </div>
      <TabContent
        value={tabs[selectedTab].value}
        header={tabs[selectedTab].content.header}
      >
        {tabs[selectedTab].content.body}
      </TabContent>
    </div>
  );
};
