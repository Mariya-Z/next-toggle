import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleLibComponent } from './toggle-lib.component';

describe('ToggleLibComponent', () => {
  let component: ToggleLibComponent;
  let fixture: ComponentFixture<ToggleLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
