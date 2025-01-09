import { cx } from "class-variance-authority";
import React, { JSX, useEffect, useState } from "react";

import { Switch as SSwitch } from "./ui/switch";

interface StatusTextProps {
	isChecked: boolean;
}
const StatusText = ({ isChecked }: StatusTextProps) => {
	return (
		<div
			className={cx(
				"text-xs font-semibold absolute w-full",
				isChecked
					? "ps-1.5 text-start text-accent "
					: "pe-1.5 text-end text-primary"
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
};
export const Switch = ({ ...props }: SwitchProps) => {
	const { icon, icon2, defaultIsChecked = false } = props;

	const [isChecked, setIsChecked] = useState(defaultIsChecked);

	const handleSwitchChange = (e: React.FormEvent<HTMLButtonElement>) => {
		const target = e.target as HTMLInputElement;
		setIsChecked(target.checked);
	};

	useEffect(() => {
		console.log(isChecked);
	}, [isChecked]);

	return (
		<SSwitch
			onPointerDown={() => setIsChecked(!isChecked)}
			checked={isChecked}
			onChange={handleSwitchChange}
			className={cx(
				"relative border-2",
				isChecked
					? "text-secondary border-white/50 bg-secondary"
					: "text-background border-primary [&>span]:bg-primary"
			)}
			textElement={<StatusText isChecked={isChecked} />}
		>
			<div className={"h-full w-full flex justify-center items-center"}>
				{isChecked && icon2 ? icon2 : icon}
			</div>
		</SSwitch>
	);
};
