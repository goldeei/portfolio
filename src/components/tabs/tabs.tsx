import { cn, hslVarToHex } from '@/lib/style-utils';
import { motion } from 'motion/react';
import { useEffect, useMemo, useRef, useState } from 'react';
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
  const [selectedTab, setSelectedTab] = useState(defaultValue);
  const handleChange = (v: string) => {
    setSelectedTab(v);
    if (onValueChange) {
      onValueChange(v);
    }
  };

  const clipRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  const content = useMemo(
    () => tabs.find((tab) => tab.value === selectedTab)?.content,
    [selectedTab, tabs],
  );

  const [indicatorClip, setIndicatorClip] = useState<string | undefined>(
    undefined,
  );
  const [barPosition, setBarPosition] = useState<
    { right: number; top: number } | undefined
  >(undefined);
  useEffect(() => {
    if (clipRef.current && indicatorRef.current) {
      const clipRect = clipRef.current.getBoundingClientRect();
      const indicatorRect = indicatorRef.current.getBoundingClientRect();

      console.log(clipRect.width, indicatorRect.width);

      const widthDiff = indicatorRect.width - clipRect.width;
      const sideOffset = widthDiff / 2;

      const clip = `inset(0 ${sideOffset}px 0 ${sideOffset}px)`;

      setBarPosition({
        right: sideOffset,
        top: 0,
      });

      setIndicatorClip(clip);
    }
  }, []);

  return (
    <div className="flex h-96 gap-12">
      <nav>
        <ul className="relative flex h-full w-fit flex-col justify-between gap-0">
          {tabs.map(({ value, label }) => (
            <motion.li
              key={value}
              initial={false}
              className="flex cursor-pointer items-center justify-between gap-4 py-4 [&_div]:rounded-full"
              onClick={() => setSelectedTab(value)}
              whileHover={{ color: '#fff' }}
            >
              <motion.div
                initial={false}
                className={cn('ps-1')}
                animate={{
                  color:
                    value === selectedTab
                      ? 'text-secondary'
                      : 'text-secondary/50',
                }}
              >
                {label}
              </motion.div>
              <div
                className={cn(
                  'flex size-6 items-center justify-center bg-accent shadow-inner transition-colors',
                  value === selectedTab && '',
                )}
              >
                {value === selectedTab && (
                  <motion.div
                    ref={indicatorRef}
                    layoutId="active-indicator"
                    id="active-indicator"
                    transition={{
                      duration: 0.75,
                      ease: 'anticipate', // Easing function
                    }}
                  >
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={'100%'}
                      height={'100%'}
                      viewBox="0 0 100 100"
                      fill={hslVarToHex('--secondary')}
                    >
                      <motion.ellipse
                        cx="50"
                        cy="50"
                        ry="40"
                        animate={{
                          rx: [40, 15, 40], // Keyframes for rx
                        }}
                        transition={{
                          duration: 0.75, // Duration of the animation
                          ease: 'anticipate', // Easing function
                        }}
                      />
                    </motion.svg>
                  </motion.div>
                )}
              </div>
            </motion.li>
          ))}
          <div
            ref={clipRef}
            className="absolute -z-50 h-full w-1.5 rounded bg-accent"
            style={barPosition}
          />
        </ul>
      </nav>
      <div>{content}</div>
    </div>
  );
};
