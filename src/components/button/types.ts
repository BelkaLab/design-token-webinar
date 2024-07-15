import { ComponentPropsWithoutRef, ElementRef } from 'react';

type ButtonElement = ElementRef<'button'>;

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  asChild?: boolean;
  variant?: 'primary' | 'secondary';
};

export type { ButtonElement, ButtonProps };
