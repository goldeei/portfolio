import { cn } from '@/lib/style-utils';
import { motion } from 'motion/react';
import { TabItem } from '.';
import { CustomScrollContainer } from '../custom-scroll-container';
import { ActiveIndicator } from './active-indicator';
import { TabLabel } from './tab-label';

interface TabNavProps {
  isVertical: boolean;
  tabs: TabItem[];
  currentIdx: number;
  onTabChange: (tabIdx: number) => void;
}

export const TabNav = (props: TabNavProps) => {
  const { tabs, isVertical, currentIdx, onTabChange } = props;

  return (
    <nav>
      <CustomScrollContainer
        as="ul"
        className={cn(
          'relative mb-4 flex h-full flex-col',
          isVertical && 'w-full flex-row justify-start overflow-x-auto pb-2',
        )}
      >
        {tabs.map(({ value, label, subLabel }, idx) => (
          <motion.li
            key={value}
            className={cn(
              'relative flex cursor-pointer',
              isVertical
                ? 'flex-1 flex-col-reverse justify-between px-6 text-center'
                : 'items-center gap-2 py-6',
            )}
            onClick={() => onTabChange(idx)}
          >
            <ActiveIndicator
              value={value}
              isActive={idx === currentIdx}
              isVertical={isVertical}
            />
            <TabLabel
              label={label}
              subLabel={subLabel}
              isActive={idx === currentIdx}
            />
            <div
              className={cn(
                'absolute -z-10 box-border flex',
                isVertical
                  ? 'right-0 bottom-0 h-5 w-full items-center'
                  : 'top-0 left-0 h-full w-5 justify-center',
              )}
            >
              <div
                className={cn(
                  'bg-accent absolute',
                  isVertical ? 'h-1 w-full' : 'h-full w-1',
                )}
              />
            </div>
          </motion.li>
        ))}
      </CustomScrollContainer>
    </nav>
  );
};
