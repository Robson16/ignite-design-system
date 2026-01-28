import { Box, BoxProps, Text } from "@beryl-ui/react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import styled from "styled-components";

const StyledBox = styled(Box)`
  background-color: ${({ theme }) => theme.colors.emerald800};
  padding: ${({ theme }) => theme.space[6]};
  border: 2px solid ${({ theme }) => theme.colors.emerald400};
  border-radius: ${({ theme }) => theme.radii.md};
`;

const meta: Meta<BoxProps> = {
  title: "Surfaces/Box",
  component: Box,
  args: {
    children: <Text>Testing the Box element</Text>,
  },
  argTypes: {
    children: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<BoxProps>;

export const Primary: Story = {};

export const CustomTag: Story = {
  args: {
    as: "form",
    children: <Text>This is a Box rendering as a Form tag</Text>,
  },
};

export const Styled: Story = {
  render: (args) => {
    return (
      <StyledBox {...args}>
        <Text>Stylized Composition Box</Text>
      </StyledBox>
    );
  },
};
