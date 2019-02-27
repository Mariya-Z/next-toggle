import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  forwardRef,
  AfterViewInit,
  Renderer2,
  ElementRef,
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
      useExisting: forwardRef(() => NextToggleComponent),
      multi: true,
    },
  ],
})
export class NextToggleComponent implements ControlValueAccessor, AfterViewInit {
  @Input() public disabled: boolean;
  @Input() public required: boolean;
  @Input() public tabIndex: number;
  @Input() public id = `next-toggle-${++counter}`;

  private isChecked = false;

  public get inputId(): string {
    return this.id;
  }

  public get checked(): any {
    return this.isChecked;
  }

  public set checked(checked: any) {
    if (checked !== this.checked) {
      this.isChecked = checked;
      this.changeDetectorRef.markForCheck();
    }
  }

  constructor(private changeDetectorRef: ChangeDetectorRef, private renderer: Renderer2, private el: ElementRef) {}

  public ngAfterViewInit() {
    this.renderer.removeAttribute(this.el.nativeElement, 'id');
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

  protected controlValueAccessorChangeFn: (value: any) => void = () => null;
  protected onTouched: (value: any) => void = () => null;
}
