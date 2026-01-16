import { ComponentProps } from 'react';
import { styled } from 'styled-components';

export const Box = styled.div`
  padding: ${({ theme }) => theme.space[4]};
  border-radius: ${({ theme }) => theme.radii.md};
  background-color: ${({ theme }) => theme.colors.gray800};
  border: 1px solid ${({ theme }) => theme.colors.gray600};
`;

export interface BoxProps extends ComponentProps<typeof Box> {}
