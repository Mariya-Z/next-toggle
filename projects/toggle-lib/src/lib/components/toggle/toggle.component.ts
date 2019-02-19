import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

export function getCheckboxValueAccessor(componentClass): any {
  return {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => componentClass),
    multi: true,
  };
}

@Component({
  selector: 'next-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleComponent {
  @Input() disabled: boolean;
  @Input() labelPosition: 'before' | 'after' = 'after';
  @Input() required: boolean;
  @Input() tabIndex: number;

  private inputIdGenerator = this.idGenerator('on-off-checkbox', 'input');
  private _changeDetectorRef: ChangeDetectorRef;
  protected controlValueAccessorChangeFn: (value: any) => void;
  protected onTouched: (value: any) => void;

  private _checked = false;
  get checked(): any {
    return this._checked;
  }

  set checked(checked: any) {
    if (checked !== this.checked) {
      this._checked = checked;
      this._changeDetectorRef.markForCheck();
    }
  }

  inputId: string;

  writeValue(value: any): void {
    this.checked = value;
  }

  registerOnChange(fn: any): void {
    this.controlValueAccessorChangeFn = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this._changeDetectorRef.markForCheck();
  }

  onChange(event: Event): void {
    this.checked = !this.checked;
    this.controlValueAccessorChangeFn(this.checked);
  }


  idGenerator(prefix: string, postfix: string): () => string {
    let counter = 0;
    return () => `${prefix}-${++counter}-${postfix}`;
  }

  constructor(inputId: string, changeDetectorRef: ChangeDetectorRef) {
    this.inputId = this.inputIdGenerator();
    this._changeDetectorRef = changeDetectorRef;
   }


}
