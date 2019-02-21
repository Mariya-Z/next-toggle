import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

let counter = 0;

@Component({
  selector: 'next-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleComponent),
      multi: true,
    }
  ]
})
export class ToggleComponent implements ControlValueAccessor, OnInit {
  @Input() disabled: boolean;
  @Input() labelPosition: 'before' | 'after';
  @Input() required: boolean;
  @Input() tabIndex: number;
  @Input() externalId: string;

  inputId: string;

  private inputIdGenerator = this.idGenerator('on-off-checkbox', 'input');
  public controlValueAccessorChangeFn: (value: any) => void;
  protected onTouched: (value: any) => void;

  private _checked = false;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    if (this.externalId) {
      this.inputId = this.externalId;
    } else {
    this.inputId = this.inputIdGenerator();
    }
  }

  get checked(): any {
    return this._checked;
  }

  set checked(checked: any) {
    if (checked !== this.checked) {
      this._checked = checked;
      this.changeDetectorRef.markForCheck();
    }
  }

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
    this.changeDetectorRef.markForCheck();
  }

  onChange(event: Event): void {
    this.checked = !this.checked;
    // this.controlValueAccessorChangeFn(this.checked);
  }

  idGenerator(prefix: string, postfix: string): () => string {
    return () => `${prefix}-${++counter}-${postfix}`;
  }


}
