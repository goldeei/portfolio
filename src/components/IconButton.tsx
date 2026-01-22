export const IconButton = ({icon, ...props}: {icon: React.ReactNode} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button className="interactive-element size-6" {...props}>
            {icon}
        </button>
    )
}