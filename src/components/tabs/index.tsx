import { useEffect, useState } from 'react';

import { ActiveIndicator } from './active-indicator';
import { indicatorSize, trackWidth } from './constants';
import { TabContent } from './tab-content';
import { TabLabel } from './tab-label';

export interface TabGroupProps {
  tabs: {
    label: string;
    subLabel?: string;
    value: string;
    content: { header: string; body: string | React.ReactNode };
  }[];
  onValueChange?: (value: string) => void;
  defaultTab?: number;
}

export const Tabs = ({ ...props }: TabGroupProps) => {
  const { tabs, defaultTab } = props;

  const [currentTabIdx, setCurrentTabIdx] = useState(defaultTab || 0);
  const [direction, setDirection] = useState(0);

  const handleTabChange = (selectedTabIdx: number) => {
    if (selectedTabIdx === currentTabIdx) return;

    selectedTabIdx < currentTabIdx ? setDirection(-1) : setDirection(1);
    setCurrentTabIdx(selectedTabIdx);
  };

  return (
    <div className="flex gap-8">
      <div className="rounded p-4">
        <nav className="relative h-full">
          <ul className="flex h-full flex-col justify-between">
            {tabs.map(({ value, label, subLabel }, idx) => (
              <li
                key={value}
                className="flex cursor-pointer items-center gap-4 py-2"
                onClick={() => handleTabChange(idx)}
              >
                <ActiveIndicator
                  value={value}
                  isActive={idx === currentTabIdx}
                />
                <TabLabel
                  label={label}
                  subLabel={subLabel}
                  isActive={idx === currentTabIdx}
                />
              </li>
            ))}
          </ul>
          <div
            className="bg-accent absolute h-full rounded-full inset-shadow-sm"
            style={{
              width: trackWidth,
              left: (indicatorSize - trackWidth) / 2,
              top: 0,
            }}
          />
        </nav>
      </div>
      <TabContent
        value={tabs[currentTabIdx].value}
        header={tabs[currentTabIdx].content.header}
      >
        {tabs[currentTabIdx].content.body}
      </TabContent>
    </div>
  );
};
