import {
  Button as SButton,
  ButtonProps as SButtonProps,
  buttonVariants,
} from './ui/button';

type ButtonProps = SButtonProps & {
  disableHover?: boolean;
  disablePressStyle?: boolean;
};
export const Button = ({ ...props }: ButtonProps) => {
  const { children } = props;

  return (
    <SButton className={buttonVariants({ variant: 'outline' })}>
      {children}
    </SButton>
  );
};
