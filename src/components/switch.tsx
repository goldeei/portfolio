import { cx } from 'class-variance-authority';
import clsx from 'clsx';
import React, { JSX, useEffect, useState } from 'react';

import { Switch as SSwitch } from './ui/switch';

interface StatusTextProps {
  isChecked: boolean;
}
const StatusText = ({ isChecked }: StatusTextProps) => {
  return (
    <div
      className={cx(
        'absolute w-full text-xs font-semibold',
        isChecked
          ? 'text-accent ps-1.5 text-start'
          : 'text-primary pe-1.5 text-end',
      )}
    >
      {isChecked ? 'on' : 'off'}
    </div>
  );
};

type SwitchProps = {
  icon: JSX.Element | string;
  onToggle: (isChecked: boolean) => void;
  defaultIsChecked?: boolean;
  icon2?: JSX.Element | string;
  hasOnOffLabel?: boolean;
};
export const Switch = ({ ...props }: SwitchProps) => {
  const {
    icon,
    icon2,
    defaultIsChecked = false,
    hasOnOffLabel = false,
    onToggle,
  } = props;

  const [isChecked, setIsChecked] = useState(defaultIsChecked);

  const handleSwitchChange = () => {
    setIsChecked(!isChecked);
    onToggle(!isChecked);
  };

  useEffect(() => {
    setIsChecked(defaultIsChecked);
  }, [defaultIsChecked]);

  return (
    <SSwitch
      onClick={handleSwitchChange}
      checked={isChecked}
      className={clsx('relative border-2 inset-shadow-xs', {
        'bg-secondary text-secondary border-white/50': isChecked,
        'border-primary text-background [&>span]:bg-primary': !isChecked,
      })}
      label={hasOnOffLabel ? <StatusText isChecked={isChecked} /> : undefined}
    >
      <div
        className={
          'size-full place-content-center place-items-center text-xs font-bold'
        }
      >
        {isChecked && icon2 ? icon2 : icon}
      </div>
    </SSwitch>
  );
};
