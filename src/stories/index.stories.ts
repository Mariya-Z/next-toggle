import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';

import * as marked from 'marked';
import * as defaultText from './default.md';

import { Welcome, Button } from '@storybook/angular/demo';

storiesOf('Welcome', module).add('to Storybook', () => ({
  component: Welcome,
  props: {},
}));

storiesOf('Button', module)
  .add('with text', () => ({
    component: Button,
    props: {
      text: 'Hello Button',
    },
  }))
  .add(
    'with some emoji',
    withNotes({ text: marked(defaultText) })(() => ({
      component: Button,
      props: {
        text: '😀 😎 👍 💯',
      },
    }))
  );

