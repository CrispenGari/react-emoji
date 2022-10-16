### React Emojify

This is a React Component Library for rendering emoji components.

<p align="center">
<img src="/fav-ico.png" width="50%" alt="react-emojify" />
</p>

### Getting started

To use `react-emojify` you need to install it as follows:

1. using `npm`

```shell
npm i @crispengari/react-emojify
```

2. using `yarn`

```shell
yarn add @crispengari/react-emojify
```

### Usage

This Component can be used as follows:

```tsx
import { Emoji } from '@crispengari/react-emojify';

export const MyEmoji = () => <Emoji emojiId="react@emojify-200" />;
```

### Props

These are the additional the props that can be passed to the component:

<table><thead ><tr><th><span>Name</span></th><th><span>Description</span></th><th><span>Required</span></th></tr></thead><tbody >
<tr>
<td>emojiId</td><td>string</td><td>true</td>
</tr>
<tr>
<td>label</td><td>string</td><td>false</td>

</tr>

</tbody></table>

_Note that the other props for the `Emoji` are the props for a regular `html` `span` tag._

### Where to find EmojiIds?

Emoji id's are found on the [**React Emojify Library**](https://react-emojis-list.vercel.app/).
