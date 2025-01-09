"use client";

import { cn } from "@/lib/utils";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import * as React from "react";

const Switch = React.forwardRef<
	React.ElementRef<typeof SwitchPrimitives.Root>,
	React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & {
		textElement?: React.ReactNode;
	}
>(({ className, ...props }, ref) => (
	<SwitchPrimitives.Root
		className={cn(
			"shadow-inner peer inline-flex h-9 w-14 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
			className
		)}
		{...props}
		ref={ref}
	>
		{props.textElement}
		<SwitchPrimitives.Thumb
			className={cn(
				"border-pointer-events-none block  h-[26px] w-[26px] rounded-full bg-background shadow-base ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-3px)] data-[state=unchecked]:translate-x-[3px] [&_svg]:size-5"
			)}
		>
			{props.children}
		</SwitchPrimitives.Thumb>
	</SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
