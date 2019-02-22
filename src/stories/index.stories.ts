import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';

import * as marked from 'marked';
import * as defaultText from './default.md';
import * as checkedText from './checked.md';
import * as disabledText from './disabled.md';
import * as sizesText from './sizes.md';
import * as orderText from './order.md';

import { ToggleComponent } from 'toggle-lib';

const styles = `
  <style>
  .container \{
    display: flex;
    flex-direction: row;
    align-items: center;
  \}
  .small \{
      font-size: 10px;
  \}
  .big \{
    font-size: 26px;
\}
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
        ${styles}
        <div class='container'>
            <next-toggle
                [disabled]="false"
                [required]="true"
                [tabIndex]="'1'"
                [externalId]="'1'"
            ></next-toggle>
            <label for='1'>Label for toggle</label>
        </div>
  `
  })))
  .add('Disabled',
    withNotes({text: marked(disabledText)})
    (() => ({
        template: `
        ${styles}
        <div class='container'>
            <next-toggle
                [disabled]="true"
                [required]="true"
                [tabIndex]="'1'"
                [externalId]="'1'"
            ></next-toggle>
            <label for='1'>Disabled</label>
        </div>
  `
  })))
  .add('Elements order',
  withNotes({text: marked(orderText)})
  (() => ({
      template: `
      ${styles}
        <div class='container'>
            <next-toggle
                [disabled]="false"
                [required]="true"
                [tabIndex]="'3'"
                [externalId]="'1'"
            ></next-toggle>
            <label for='1'>Third</label>
        </div>
        <div class='container'>
            <next-toggle
                [disabled]="false"
                [required]="true"
                [tabIndex]="'1'"
                [externalId]="'2'"
            ></next-toggle>
            <label for='2'>First</label>
        </div>
        <div class='container'>
            <next-toggle
                [disabled]="false"
                [required]="true"
                [tabIndex]="'2'"
                [externalId]="'3'"
            ></next-toggle>
            <label for='3'>Second</label>
        </div>
  `
  })))
  .add('Different sizes',
  withNotes({text: marked(sizesText)})
  (() => ({
      template: `
      ${styles}
        <div class='container'>
            <next-toggle class="small"
                [disabled]="false"
                [required]="true"
                [tabIndex]="'1'"
                [externalId]="'1'"
            ></next-toggle>
            <label for='1' class="small">Small</label>
        </div>
        <div class='container'>
            <next-toggle class="medium"
                [disabled]="false"
                [required]="true"
                [tabIndex]="'1'"
                [externalId]="'2'"
            ></next-toggle>
            <label for='2' class="medium">Medium</label>
        </div>
        <div class='container'>
            <next-toggle class="big"
                [disabled]="false"
                [required]="true"
                [tabIndex]="'1'"
                [externalId]="'3'"
            ></next-toggle>
            <label for='3' class="big">Big</label>
        </div>
  `
  })))
;


