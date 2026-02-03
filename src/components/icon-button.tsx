import { cn } from "@/lib/utils"

export const IconButton = ({className, icon, ...props}: {className?: string, icon: React.ReactNode} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button className={cn("interactive-element p-1.5", className)} {...props}>
            {icon}
        </button>
    )
}