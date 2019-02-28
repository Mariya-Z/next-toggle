import {async, ComponentFixture, TestBed, flush, fakeAsync} from '@angular/core/testing';
import {NextToggleComponent} from './toggle.component';
import {By} from '@angular/platform-browser';
import {Component, DebugElement} from '@angular/core';
import {NgModel, FormsModule, ReactiveFormsModule, FormControl} from '@angular/forms';

describe('NextToggleComponent', () => {
  let component: NextToggleComponent;
  let fixture: ComponentFixture<NextToggleComponent>;
  let toggleDebugElement: DebugElement;
  let toggleInstance: NextToggleComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NextToggleComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextToggleComponent);
    component = fixture.componentInstance;
    // toggleDebugElement = fixture.debugElement.query(By.directive(NextToggleComponent));
    // toggleInstance = toggleDebugElement.componentInstance;
    component.disabled = false;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate id for element automatically', () => {
    expect(component.inputId.startsWith('next-toggle-')).toBeTruthy();
  });

  it('should change value by click', () => {
    const input = fixture.debugElement.query(By.css('input')).nativeElement;
    expect(input.checked).toBeFalsy();
    input.click();
    fixture.detectChanges();
    expect(input.checked).toBeTruthy();
  });

  it('should be enabled', () => {
    const onchange = spyOn(component, 'onChange');
    const input = fixture.debugElement.query(By.css('input'));
    input.triggerEventHandler('change', new Event('change'));
    expect(onchange).toHaveBeenCalled();
  });

  it('should be disabled', async (fakeAsync(() => {
    toggleDebugElement = fixture.debugElement.query(By.directive(NextToggleComponent));
    toggleInstance = toggleDebugElement.componentInstance;
    const onchange = spyOn(component, 'onChange');
    toggleInstance.disabled = true;
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      flush();
      console.log('23');
      const input = fixture.debugElement.query(By.css('input'));
      input.triggerEventHandler('change', new Event('change'));
      expect(onchange).not.toHaveBeenCalled();
    });
  })));
});

describe('NextToggleComponent with external id', () => {
  let component: NextToggleComponent;
  let fixture: ComponentFixture<NextToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NextToggleComponent],
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(NextToggleComponent);
    component = fixture.componentInstance;
    component.id = 'someValue';
    fixture.detectChanges();
  });

  it('should use external id for component', () => {
    expect(component.inputId).toEqual('someValue');
  });
});

describe('ngModel', () => {
  let component: ToggleWithNgModel;
  let fixture: ComponentFixture<ToggleWithNgModel>;
  let toggleDebugElement: DebugElement;
  let toggleInstance: NextToggleComponent;
  let ngModel: NgModel;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ToggleWithNgModel, NextToggleComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleWithNgModel);
    fixture.detectChanges();
    toggleDebugElement = fixture.debugElement.query(By.directive(NextToggleComponent));
    toggleInstance = toggleDebugElement.componentInstance;
    ngModel = toggleDebugElement.injector.get<NgModel>(NgModel);
    component = fixture.componentInstance;
  });

  it('should call writeVaue', () => {
    const spyOnSetDisabledState = spyOn(toggleInstance, 'writeValue');
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(spyOnSetDisabledState).toHaveBeenCalled();
    });

    // expect(toggleInstance.disabled).toBe(true);
    // expect(toggleInstance.required).toBe(true);
    // expect(toggleInstance.checked).not.toBe(true);
  });

  it('should call setDisabled', () => {
    const spyOnSetDisabledState = spyOn(toggleInstance, 'setDisabledState');
    component.disabled = !component.disabled;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(spyOnSetDisabledState).toHaveBeenCalled();
    });
  });

  it('should react on click', () => {
    const input = fixture.debugElement.query(By.css('input')).nativeElement;
    const spyOnRegisterChange = spyOn(toggleInstance, 'registerOnChange');
    const spyOnRegisterOnTouched = spyOn(toggleInstance, 'registerOnTouched');
    input.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(spyOnRegisterChange).toHaveBeenCalled();
      expect(spyOnRegisterOnTouched).toHaveBeenCalled();
    });
  });
});

@Component({
  template: `
    <form class="ng-model-form">
      <next-toggle
        [disabled]="disabled"
        [required]="required"
        [tabIndex]="tabIndex"
        [id]="id"
        [(ngModel)]="isChecked"
        name="toggle"
      ></next-toggle>
      <label for="1" class="checkbox-layout">reactive form</label>
    </form>
  `,
})
class ToggleWithNgModel {
  public disabled: boolean = false;
  public required: boolean = true;
  public tabIndex: number = 1;
  public id: string = '1';
  public isChecked: boolean = true;
}
