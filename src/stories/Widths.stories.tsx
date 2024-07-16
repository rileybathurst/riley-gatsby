// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Widths } from './Widths';

const meta = {
  component: Widths,
  title: 'Uncategorized/Widths',
  args: { onClick: fn() },
} satisfies Meta<typeof Widths>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};