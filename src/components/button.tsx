import { JSX } from "react";

import {
	Button as SButton,
	ButtonProps as SButtonProps,
	buttonVariants,
} from "./ui/button";

type ButtonProps = SButtonProps & {
	icon?: JSX.Element;
	disableHover?: boolean;
	disablePressStyle?: boolean;
};
export const Button = ({ ...props }: ButtonProps) => {
	const { children, variant = "outline", className, icon, size } = props;

	return (
		<SButton className={buttonVariants({ variant, className, size })}>
			{icon}
			{children}
		</SButton>
	);
};
