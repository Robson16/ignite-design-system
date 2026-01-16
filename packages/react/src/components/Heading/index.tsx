import { ComponentProps, ElementType } from 'react';

import { HeadingContainer } from './styles';

export interface HeadingProps extends ComponentProps<typeof HeadingContainer> {
  as?: ElementType;
}

export function Heading(props: HeadingProps) {
  return <HeadingContainer {...props} />;
}

Heading.displayName = 'Heading';
