import React from 'react';
import { Meta } from '@storybook/react';
import { Emoji } from '../src/Emoji';

const meta: Meta = {
  title: 'Emoji',
  component: Emoji,
  argTypes: {
    emojiId: {
      defaultValue: 'react@emojify-200',
    },
  },
};

export default meta;

export const Default = args => <Emoji {...args} />;
