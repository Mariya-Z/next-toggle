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
    flex-direction: column;
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
    display: flex;
    flex-direction: row;
  \}
  .small \{
      font-size: 10px;
  \}
  .medium \{
    font-size: 16px;
  \}
  .big \{
    font-size: 26px;
  \}
  </style>
`;

export const checkedState = {
    isChecked: false
};

export const checkedStatesForDifferentSize = {
    isFirstChecked: false,
    isSecondChecked: true,
    isThirdChecked: false,
};

export const checkedStatesForDifferentTabIndex = {
    isFirstChecked: false,
    isSecondChecked: true,
    isThirdChecked: false,
    isFourthChecked: true
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
            <div class="container__row">
                <next-toggle
                    [disabled]="false"
                    [required]="true"
                    [tabIndex]="'1'"
                    [id]="'1'"
                    [(ngModel)]="checkedState.isChecked"
                    name="toggle"
                ></next-toggle>
                <label for="1" class="checkbox-layout">Label for toggle</label>
            </div>
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
            <div class="container__row">
                <next-toggle
                    [disabled]="true"
                    [required]="true"
                    [tabIndex]="'1'"
                    [id]="'1'"
                    [(ngModel)]="checkedState.isChecked"
                    name="toggle"
                ></next-toggle>
                <label for="1" class="checkbox-layout">Disabled</label>
            </div>
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
            <div class="container__row">
                <next-toggle
                    [disabled]="false"
                    [required]="true"
                    [tabIndex]="'1'"
                    [id]="'1'"
                    [(ngModel)]="checkedState.isChecked"
                    name="toggle"
                ></next-toggle>
                <label for="1" class="checkbox-layout">Required</label>
                <input type="submit">
            </div>
        </form>
  `,
  props: { checkedState }
  })))
  .add('Elements order',
  withNotes({text: marked(orderText)})
  (() => ({
      template: `
      ${styles}
      <form class="container">
        <div class="container__row">
            <next-toggle
                [disabled]="false"
                [required]="true"
                [tabIndex]="'3'"
                [id]="'4'"
                [(ngModel)]="checkedStatesForDifferentTabIndex.isFirstChecked"
                name="toggle1"
            ></next-toggle>
            <label for="4" class="checkbox-layout">Third</label>
        </div>

        <div class="container__row">
            <next-toggle
                [disabled]="false"
                [required]="true"
                [tabIndex]="'4'"
                [id]="'1'"
                [(ngModel)]="checkedStatesForDifferentTabIndex.isSecondChecked"
                name="toggle4"
            ></next-toggle>
            <label for="1" class="checkbox-layout">Fourth</label>
        </div>

        <div class="container__row">
            <next-toggle
                [disabled]="false"
                [required]="true"
                [tabIndex]="'1'"
                [id]="'2'"
                [(ngModel)]="checkedStatesForDifferentTabIndex.isThirdChecked"
                name="toggle2"
            ></next-toggle>
            <label for="2" class="checkbox-layout">First</label>
        </div>

        <div class="container__row">
            <next-toggle
                [disabled]="false"
                [required]="true"
                [tabIndex]="'2'"
                [id]="'3'"
                name="toggle3"
                [(ngModel)]="checkedStatesForDifferentTabIndex.isFourthChecked"
            ></next-toggle>
            <label for="3" class="checkbox-layout">Second</label>
        </div>
     </form>
  `,
  props: { checkedStatesForDifferentTabIndex }
  })))
  .add('Different sizes',
  withNotes({text: marked(sizesText)})
  (() => ({
      template: `
      ${styles}
        <form class="container">
            <div class="container__row">
                <next-toggle class="small"
                    [disabled]="false"
                    [required]="true"
                    [tabIndex]="'3'"
                    [id]="'1'"
                    [(ngModel)]="checkedStatesForDifferentSize.isFirstChecked"
                    name="toggle1"
                ></next-toggle>
                <label for="1" class="small checkbox-layout">Small</label>
            </div>

            <div class="container__row">
                <next-toggle class="medium"
                    [disabled]="false"
                    [required]="true"
                    [tabIndex]="'2'"
                    [id]="'2'"
                    [(ngModel)]="checkedStatesForDifferentSize.isSecondChecked"
                    name="toggle2"
                ></next-toggle>
                <label for="2" class="medium checkbox-layout">Medium</label>
            </div>

            <div class="container__row">
                <next-toggle class="big"
                    [disabled]="false"
                    [required]="true"
                    [tabIndex]="'1'"
                    [id]="'3'"
                    [(ngModel)]="checkedStatesForDifferentSize.isThirdChecked"
                    name="toggle3"
                ></next-toggle>
                <label for="3" class="big checkbox-layout">Big</label>
            </div>
        </form>
  `,
  props: { checkedStatesForDifferentSize }
  })))
;


