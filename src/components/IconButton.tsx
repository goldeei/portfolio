export const IconButton = ({icon, ...props}: {icon: React.ReactNode} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button className="text-text-muted hover:text-secondary transition-colors shadow-2xl hover:shadow-secondary/90 size-6" {...props}>
            {icon}
        </button>
    )
}