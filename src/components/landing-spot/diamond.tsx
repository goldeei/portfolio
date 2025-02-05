export const Diamond = ({
  className,
  style,
}: {
  className: string;
  style: React.CSSProperties;
}) => (
  <div
    style={{
      clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
      ...style,
    }}
    className={className}
  />
);
