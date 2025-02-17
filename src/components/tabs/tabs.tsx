import { cn } from '@/lib/style-utils';
import { useMemo, useState } from 'react';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';

interface TabGroupProps {
  tabs: {
    label: string;
    value: string;
    content: React.ReactNode;
  }[];
  onValueChange?: (value: string) => void;
  defaultValue?: string;
}

const gridClasses = (tabCount: number) =>
  `grid-rows-[repeat(${tabCount}, auto)] grid items-center py-2 gap-3`;

export const Tabs = ({ ...props }: TabGroupProps) => {
  const { tabs, defaultValue, onValueChange } = props;
  const [selectedTab, setSelectedTab] = useState(defaultValue || '');
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
    <div className="flex h-64 gap-12 py-4">
      <RadioGroup
        className="flex gap-0"
        onValueChange={handleChange}
        value={selectedTab}
      >
        <div
          className={cn(
            'gap-4 rounded-full bg-accent px-1.5 shadow-inner',
            gridClasses(tabs.length),
          )}
        >
          {tabs.map(({ value }) => (
            <RadioGroupItem
              key={value}
              value={value}
              id={value}
              className="h-full w-3 border border-secondary/5 bg-secondary/25 shadow-inner transition-all hover:bg-secondary/50 data-[state=checked]:bg-secondary data-[state=checked]:shadow-sm [&_svg]:hidden"
            />
          ))}
        </div>
        <div className={gridClasses(tabs.length)}>
          {tabs.map(({ label, value }) => (
            <Label
              key={value}
              htmlFor={value}
              className={cn(
                'cursor-pointer px-2 py-1 text-secondary/50 hover:text-secondary/75',
                value === selectedTab && 'text-secondary',
              )}
            >
              {label}
            </Label>
          ))}
        </div>
      </RadioGroup>
      <div>{content}</div>
    </div>
  );
};
