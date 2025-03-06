import { useMemo, useState } from 'react';

import { BREAKPOINT } from '@/constants';
import { cn } from '@/lib/style-utils';
import { useWindowSize } from 'usehooks-ts';
import { TabContent } from './tab-content';
import { TabNav } from './tab-nav';

export type TabItem = {
  label: string;
  subLabel?: string;
  value: string;
  content: { header: string; body: string | React.ReactNode };
};

type TabGroupProps = {
  tabs: TabItem[];
  onValueChange?: (idx: number) => void;
  defaultTab?: number;
} & (
  | {
      // Auto orientation mode
      autoOrientation: true;
      orientation?: never;
    }
  | {
      // Manual orientation mode
      autoOrientation: false;
      orientation: 'vertical' | 'horizontal';
    }
  | {
      // Default case
      autoOrientation?: undefined;
      orientation?: 'vertical' | 'horizontal';
    }
);

export const Tabs = (props: TabGroupProps) => {
  const {
    tabs,
    defaultTab,
    orientation = 'vertical',
    autoOrientation = true,
    onValueChange,
  } = props;

  const [currentTabIdx, setCurrentTabIdx] = useState(defaultTab || 0);

  const { width } = useWindowSize();

  const isVertical = useMemo(() => {
    if (!autoOrientation) return orientation === 'vertical';

    return width < BREAKPOINT.md;
  }, [autoOrientation, orientation, width]);

  const handleTabChange = (selectedTabIdx: number) => {
    if (selectedTabIdx === currentTabIdx) return;

    if (onValueChange) {
      onValueChange(selectedTabIdx);
    }
    return setCurrentTabIdx(selectedTabIdx);
  };

  return (
    <div className={cn('flex h-full gap-8', isVertical && 'flex-col')}>
      <TabNav
        isVertical={isVertical}
        tabs={tabs}
        currentIdx={currentTabIdx}
        onTabChange={handleTabChange}
      />
      <TabContent
        value={tabs[currentTabIdx].value}
        header={tabs[currentTabIdx].content.header}
      >
        {tabs[currentTabIdx].content.body}
      </TabContent>
    </div>
  );
};
