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
  `grid-rows-[repeat(${tabCount}, auto)] grid items-center py-2 gap-3 h-full`;

const radioClasses = 'h-full min-h-8 cursor-pointer transition-all';

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
    <div className="flex h-96 gap-12">
      <RadioGroup
        className="relative flex h-full w-fit flex-col justify-between gap-0"
        onValueChange={handleChange}
        value={selectedTab}
      >
        {tabs.map(({ value, label }) => (
          <div key={value} className="flex items-center justify-between gap-4">
            <Label
              key={`${value}-label`}
              className={cn(
                'ps-1 text-secondary/50',

                value === selectedTab
                  ? 'text-secondary'
                  : 'hover:text-secondary/75',
              )}
            >
              {label}
            </Label>
            <RadioGroupItem
              value={value}
              id={value}
              className={cn(
                'size-5 border-none bg-accent shadow-inner outline-none ring-0 [&_svg]:hidden',

                value === selectedTab
                  ? 'bg-secondary shadow-sm'
                  : 'hover:bg-secondary/50',
              )}
            />
          </div>
        ))}
        <div className="absolute right-2 -z-50 h-full w-1.5 bg-accent" />
      </RadioGroup>
      <div>{content}</div>
    </div>
  );
};

//  <div className="flex h-96 gap-12 py-4">
//    <RadioGroup
//      className="flex h-full gap-0"
//      onValueChange={handleChange}
//      value={selectedTab}
//    >
//      <div
//        className={cn(
//          'rounded-full bg-accent px-1.5 shadow-inner',
//          gridClasses(tabs.length),
//        )}
//      >
//        {tabs.map(({ value }) => (
//          <RadioGroupItem
//            key={value}
//            value={value}
//            id={value}
//            className={cn(
//              'w-2 border border-secondary/5 bg-secondary/25 shadow-inner outline-none ring-0 [&_svg]:hidden',
//              radioClasses,
//              value === selectedTab
//                ? 'bg-secondary shadow-sm'
//                : 'hover:bg-secondary/50',
//            )}
//          />
//        ))}
//      </div>
//      <div className={gridClasses(tabs.length)}>
//        {tabs.map(({ label, value }) => (
//          <Label
//            key={value}
//            htmlFor={value}
//            className={cn(
//              'place-content-center ps-1 text-secondary/50',
//              radioClasses,
//              value === selectedTab
//                ? 'text-secondary'
//                : 'hover:text-secondary/75',
//            )}
//          >
//            {label}
//          </Label>
//        ))}
//      </div>
//    </RadioGroup>
//    <div>{content}</div>
//  </div>;
