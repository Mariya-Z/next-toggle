import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';

import * as marked from 'marked';
import * as defaultText from './default.md';
import * as requiredText from './required.md';
import * as disabledText from './disabled.md';
import * as sizesText from './sizes.md';
import * as orderText from './order.md';

import { ToggleComponent } from 'toggle-lib';

const styles = `
  <style>
  .container \{
    display: flex;
    flex-direction: row;
  \}
  .checkbox-layout \{
    position: relative;
    color: #9D9D9D;
    font-weight: 600;
    margin: 0;
    display: flex;
    align-items: center;
    text-overflow: ellipsis;
  \}
  .container__row \{
    display: block;
  \}
  .small \{
      font-size: 10px;
  \}
  .big \{
    font-size: 26px;
  \}
  </style>
`;

export const checkedState = {
    isChecked: false
};

export const checkedStates = {
    isFirstChecked: false,
    isSecondChecked: false,
    isThirdChecked: false
};

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
        <form class="container" ngNativeValidate>
            <next-toggle
                [disabled]="false"
                [required]="true"
                [tabIndex]="'1'"
                [externalId]="'1'"
                [(ngModel)]="checkedState.isChecked"
                name="toggle"
            ></next-toggle>
            <label for='1'>Label for toggle</label>
        </form>
  `,
  props: { checkedState }
  })))
  .add('Disabled',
    withNotes({text: marked(disabledText)})
    (() => ({
        template: `
        ${styles}
        <form class="container" ngNativeValidate>
            <next-toggle
                [disabled]="true"
                [required]="true"
                [tabIndex]="'1'"
                [externalId]="'1'"
                [(ngModel)]="checkedState.isChecked"
                name="toggle"
            ></next-toggle>
            <label for='1'>Disabled</label>
        </form>
  `,
  props: { checkedState }
  })))
  .add('Required',
    withNotes({text: marked(requiredText)})
    (() => ({
        template: `
        ${styles}
        <form class="container" ngNativeValidate>
            <next-toggle
                [disabled]="false"
                [required]="true"
                [tabIndex]="'1'"
                [externalId]="'1'"
                [(ngModel)]="checkedState.isChecked"
                name="toggle"
            ></next-toggle>
            <label for='1'>Required</label>
            <input type="submit">
        </form>
  `,
  props: { checkedState }
  })))
  .add('Elements order',
  withNotes({text: marked(orderText)})
  (() => ({
      template: `
      ${styles}
        <form class="container" ngNativeValidate>
            <next-toggle
                [disabled]="false"
                [required]="true"
                [tabIndex]="'3'"
                [externalId]="'1'"
                [(ngModel)]="checkedState.isChecked"
                name="toggle1"
            ></next-toggle>
            <label for='1'>Third</label>
        </form>
        <form class="container" ngNativeValidate>
            <next-toggle
                [disabled]="false"
                [required]="true"
                [tabIndex]="'1'"
                [externalId]="'2'"
                [(ngModel)]="checkedState.isChecked"
                name="toggle2"
            ></next-toggle>
            <label for='2'>First</label>
        </form>
        <form class="container" ngNativeValidate>
            <next-toggle
                [disabled]="false"
                [required]="true"
                [tabIndex]="'2'"
                [externalId]="'3'"
                [(ngModel)]="checkedState.isChecked"
                name="toggle3"
            ></next-toggle>
            <label for='3'>Second</label>
        </form>
  `,
  props: { checkedState }
  })))
  .add('Different sizes',
  withNotes({text: marked(sizesText)})
  (() => ({
      template: `
      ${styles}
        <form class="container" ngNativeValidate>
            <div class="container__row">
                <next-toggle class="small"
                    [disabled]="false"
                    [required]="true"
                    [tabIndex]="'1'"
                    [externalId]="'1'"
                    [(ngModel)]="checkedState.isFirstChecked"
                    name="toggle1"
                ></next-toggle>
                <label for='1' class="small checkbox-layout">Small</label>
            </div>

            <div class="container__row">
                <next-toggle class="medium"
                    [disabled]="false"
                    [required]="true"
                    [tabIndex]="'1'"
                    [externalId]="'2'"
                    [(ngModel)]="checkedState.isSecondChecked"
                    name="toggle2"
                ></next-toggle>
                <label for='2' class="medium checkbox-layout">Medium</label>
            </div>

            <div class="container__row">
                <next-toggle class="big"
                    [disabled]="false"
                    [required]="true"
                    [tabIndex]="'1'"
                    [externalId]="'3'"
                    [(ngModel)]="checkedState.isThirdChecked"
                    name="toggle3"
                ></next-toggle>
                <label for='3' class="big checkbox-layout">Big</label>
            </div>
        </form>
  `,
  props: { checkedState }
  })))
;


