import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

import type { ButtonElement, ButtonProps } from './types';

const Button = forwardRef<ButtonElement, ButtonProps>((props, ref) => {
  const { asChild, className, variant = 'primary', ...buttonProps } = props;
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      {...buttonProps}
      className={clsx(
        'button',
        {
          'button--primary': variant === 'primary',
          'button--secondary': variant === 'secondary',
        },
        className,
      )}
      ref={ref}
    />
  );
});
Button.displayName = 'Button';

export { Button };
