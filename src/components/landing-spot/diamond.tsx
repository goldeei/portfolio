import { Ref } from 'react';

export const Diamond = ({
  className,
  style,
  ref,
}: {
  className: string;
  style: React.CSSProperties;
  ref?: Ref<HTMLDivElement>;
}) => (
  <div
    ref={ref}
    style={{
      clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
      ...style,
    }}
    className={className}
  />
);
