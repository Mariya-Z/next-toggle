import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';

import * as marked from 'marked';
import * as defaultText from './default.md';

import { ToggleComponent } from 'toggle-lib';

const styles = `
  <style>
  </style>
`;

storiesOf('Next-toggle', module)
  .addDecorator(
    moduleMetadata({
      declarations: [ToggleComponent],
    })
  )
  .add('Install',
    withNotes({text: marked(defaultText)})
    (() => ({
    template: `
    <div>
      <form>
          <next-toggle
              [disabled]="false"
              [required]="true"
              [tabIndex]="'1'"
          >toggle lable</next-toggle>
      </form>
    </div>
  `
  })))
  .add('Checked',
  withNotes({text: marked(defaultText)})
  (() => ({
  template: `
  <div>
    <form action="">
        <next-toggle
            [disabled]="false"
            [required]="true"
            [tabIndex]="'1'"
        >toggle lable</next-toggle>
    </form>
  </div>
`
})))
.add('Disable',
withNotes({text: marked(defaultText)})
(() => ({
template: `
<div>
  <form action="">
      <next-toggle
          [disabled]="true"
          [required]="true"
          [tabIndex]="'1'"
      >toggle lable</next-toggle>
  </form>
</div>
`
})))
.add('Disable checked',
withNotes({text: marked(defaultText)})
(() => ({
template: `
<div>
<form action="">
    <next-toggle
        [disabled]="true"
        [required]="true"
        [tabIndex]="'1'"
    >toggle lable</next-toggle>
</form>
</div>
`
})))
.add('Tab index',
withNotes({text: marked(defaultText)})
(() => ({
template: `
<div>
<form action="">
    <next-toggle
        [disabled]="false"
        [required]="true"
        [tabIndex]="'2'"
    >toggle lable</next-toggle>
    <next-toggle
        [disabled]="false"
        [required]="true"
        [tabIndex]="'1'"
    >toggle lable</next-toggle>
</form>
</div>
`
})));


