import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  forwardRef,
  OnInit,
} from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';

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
    },
  ],
})
export class ToggleComponent implements ControlValueAccessor, OnInit {
  @Input() disabled: boolean;
  @Input() required: boolean;
  @Input() tabIndex: number;
  @Input() id: string;

  inputId: string;

  private inputIdGenerator = this.idGenerator('on-off-checkbox', 'input');
  public controlValueAccessorChangeFn: (value: any) => void;
  protected onTouched: (value: any) => void;

  private _checked = false;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    if (this.id) {
      this.inputId = this.id;
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

  public writeValue(value: any): void {
    this.checked = value;
  }

  public registerOnChange(fn: any): void {
    this.controlValueAccessorChangeFn = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.changeDetectorRef.markForCheck();
  }

  public onChange(event: Event): void {
    this.checked = !this.checked;
    this.controlValueAccessorChangeFn(this.checked);
  }

  private idGenerator(prefix: string, postfix: string): () => string {
    return () => `${prefix}-${++counter}-${postfix}`;
  }
}
