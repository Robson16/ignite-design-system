import { ComponentProps } from 'react';
import { css, styled } from 'styled-components';

interface ButtonVariantProps {
  size?: 'small' | 'big';
}

export const Button = styled.button<ButtonVariantProps>`
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.default};

  border-radius: ${({ theme }) => theme.radii.sm};
  border: 0;

  background-color: ${({ theme }) => theme.colors.ignite300};
  color: ${({ theme }) => theme.colors.white};

  cursor: pointer;

  ${({ size = 'small', theme }) => css`
    ${size === 'small' &&
    css`
      font-size: 14px;
      padding: ${theme.space[2]} ${theme.space[4]};
    `}

    ${size === 'big' &&
    css`
      font-size: 16px;
      padding: ${theme.space[3]} ${theme.space[6]};
    `}
  `}
`;

export interface ButtonProps extends ComponentProps<typeof Button> {}
