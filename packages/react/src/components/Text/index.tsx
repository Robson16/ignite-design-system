import { ComponentProps, ElementType } from 'react';

import { TextContainer } from './styles';

export interface TextProps extends ComponentProps<typeof TextContainer> {
  as?: ElementType;
}

export function Text(props: TextProps) {
  return <TextContainer {...props} />;
}
