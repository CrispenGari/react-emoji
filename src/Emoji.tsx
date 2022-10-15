import React from 'react';
import { data } from './static/react-emojify';

export interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  emojiId: number;
  label?: string;
}
export const Emoji: React.FC<Props> = ({ label, emojiId, ...props }) => {
  const emoji = data.data.find(({ id }) => id === emojiId);
  if (!emoji)
    return (
      <span role="img" {...props} aria-label={label}>
        -
      </span>
    );
  return (
    <span {...props} role="img" aria-label={label}>
      {emoji.hexcodes.map(hex => String.fromCodePoint(hex as any))}
    </span>
  );
};
