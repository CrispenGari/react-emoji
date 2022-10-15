import React from 'react';
import { data } from './static/react-emojify';

export interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  emojiId: string;
  label?: string;
}
export const Emoji: React.FC<Props> = ({ label, emojiId, ...props }) => {
  const _id = emojiId.split('-')[1] as any;
  const emoji = data.data.find(({ id }) => id === Number.parseInt(_id));
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
