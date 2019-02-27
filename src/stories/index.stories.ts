import {storiesOf, moduleMetadata} from '@storybook/angular';
import {withNotes} from '@storybook/addon-notes';

import * as marked from 'marked';
import * as defaultText from './default.md';
import * as requiredText from './required.md';
import * as disabledText from './disabled.md';
import * as sizesText from './sizes.md';
import * as orderText from './order.md';

import {ToggleComponent} from '../../projects/toggle-lib/src/public_api';

const styles = `
  <style>
  .container \{
    display: flex;
    flex-direction: column;
    font-size: 30px;
  \}
  .checkbox-layout \{
    position: relative;
    font-weight: 600;
    margin: 0;
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
  .submit-btn \{
    background-color: #0460a9;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: block;
    margin: 20px 0;
    font-size: 16px;
    cursor: pointer;  \}
  </style>
`;

export const checkedState = {
  isFirstChecked: true,
  isFirstUnChecked: false,
  isThirdChecked: true,
  isThirdUnChecked: false,
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
  isFourthChecked: true,
};

storiesOf('Next-toggle', module)
  .addDecorator(
    moduleMetadata({
      declarations: [ToggleComponent],
    }),
  )
  .add(
    'Install',
    withNotes({text: marked(defaultText)})(() => ({
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
      props: {checkedState},
    })),
  )
  .add(
    'With different font-sizes',
    withNotes({text: marked(sizesText)})(() => ({
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
                <label for="1" class="small checkbox-layout">10px</label>
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
                <label for="2" class="medium checkbox-layout">16px</label>
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
                <label for="3" class="big checkbox-layout">26px</label>
            </div>
        </form>
  `,
      props: {checkedStatesForDifferentSize},
    })),
  )
  .add(
    'With disabled toggle',
    withNotes({text: marked(disabledText)})(() => ({
      template: `
        ${styles}
        <form class="container">
        <div class="container__row">
            <next-toggle
                [disabled]="false"
                id="1"
                [(ngModel)]="checkedState.isFirstChecked"
                name="toggle1"
            ></next-toggle>
            <label for="1">Active on</label>
        </div>

        <div class="container__row">
            <next-toggle
                [disabled]="false"
                id="2"
                [(ngModel)]="checkedState.isFirstUnChecked"
                name="toggle2"
            ></next-toggle>
            <label for="2">Active off</label>
        </div>

        <div class="container__row">
            <next-toggle
                [disabled]="true"
                id="3"
                [(ngModel)]="checkedState.isThirdUnChecked"
                name="toggle3"
            ></next-toggle>
            <label for="3">Disabled off</label>
        </div>

        <div class="container__row">
            <next-toggle
                [disabled]="true"
                id="3"
                [(ngModel)]="checkedState.isThirdChecked"
                name="toggle4"
            ></next-toggle>
            <label for="3">Disabled on</label>
        </div>
    </form>
  `,
      props: {checkedState},
    })),
  )
  .add(
    'With different tab indexes',
    withNotes({text: marked(orderText)})(() => ({
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
      props: {checkedStatesForDifferentTabIndex},
    })),
  )
  .add(
    'With required attribute',
    withNotes({text: marked(requiredText)})(() => ({
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
            </div>
            <div>
                <input class="submit-btn" type="submit">
            </div>
        </form>
  `,
      props: {checkedState},
    })),
  );
