import { cx } from "class-variance-authority";
import clsx from "clsx";
import React, { JSX, useEffect, useState } from "react";

import { Switch as SSwitch } from "./ui/switch";

interface StatusTextProps {
  isChecked: boolean;
}
const StatusText = ({ isChecked }: StatusTextProps) => {
  return (
    <div
      className={cx(
        "absolute w-full text-xs font-semibold",
        isChecked
          ? "ps-1.5 text-start text-accent"
          : "pe-1.5 text-end text-primary",
      )}
    >
      {isChecked ? "on" : "off"}
    </div>
  );
};

type SwitchProps = {
  icon: JSX.Element;
  icon2?: JSX.Element;
  defaultIsChecked?: boolean;
  hasOnOffLabel?: boolean;
};
export const Switch = ({ ...props }: SwitchProps) => {
  const {
    icon,
    icon2,
    defaultIsChecked = false,
    hasOnOffLabel = false,
  } = props;

  const [isChecked, setIsChecked] = useState(defaultIsChecked);

  const handleSwitchChange = (e: React.FormEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLInputElement;
    setIsChecked(target.checked);
  };

  return (
    <SSwitch
      onPointerDown={() => setIsChecked(!isChecked)}
      checked={isChecked}
      onChange={handleSwitchChange}
      className={clsx("relative border-2", {
        "border-white/50 bg-secondary text-secondary": isChecked,
        "border-primary text-background [&>span]:bg-primary": !isChecked,
      })}
      label={hasOnOffLabel ? <StatusText isChecked={isChecked} /> : undefined}
    >
      <div className={"size-full place-content-center place-items-center"}>
        {isChecked && icon2 ? icon2 : icon}
      </div>
    </SSwitch>
  );
};
