import { LockClosedIcon } from '@radix-ui/react-icons';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'radio',
      },
      options: ['primary', 'secondary'],
    },
  },
  args: {
    children: 'Button',
    variant: 'primary',
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
  argTypes: {
    variant: {
      table: {
        disable: true,
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
  argTypes: {
    variant: {
      table: {
        disable: true,
      },
    },
  },
};

export const RightIcon: Story = {
  render: ({ children, ...args }) => (
    <Button {...args}>
      {children}
      <LockClosedIcon />
    </Button>
  ),
};
