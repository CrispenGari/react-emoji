import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Emoji, Props } from '../src/Emoji';

const meta: Meta = {
  title: 'Emoji',
  component: Emoji,
  argTypes: {
    emojiId: {
      defaultValue: 200,
    },
  },
};

export default meta;

export const Default = args => <Emoji {...args} />;
