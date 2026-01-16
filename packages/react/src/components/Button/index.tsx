import { ComponentProps } from 'react';

import { ButtonContainer } from './styles';

export interface ButtonProps extends ComponentProps<typeof ButtonContainer> {}

export function Button(props: ButtonProps) {
  return <ButtonContainer {...props} />;
}

Button.displayName = 'Button';
