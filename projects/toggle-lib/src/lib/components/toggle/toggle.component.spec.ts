import {async, ComponentFixture, TestBed, flush} from '@angular/core/testing';

import {NextToggleComponent} from './toggle.component';
import {By} from '@angular/platform-browser';

describe('NextToggleComponent', () => {
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
    component.disabled = false;
    fixture.detectChanges();
  });

  it('should generate id for element automatically', () => {
    expect(component.inputId.startsWith('next-toggle-')).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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

  it('should be disabled', async () => {
    const onchange = spyOn(component, 'onChange');

    component.disabled = true;
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      flush();
      const input = fixture.debugElement.query(By.css('input'));
      input.triggerEventHandler('change', new Event('change'));
      expect(onchange).not.toHaveBeenCalled();
    });
  });
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
