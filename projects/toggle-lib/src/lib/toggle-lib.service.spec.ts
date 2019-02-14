import { TestBed } from '@angular/core/testing';

import { ToggleLibService } from './toggle-lib.service';

describe('ToggleLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToggleLibService = TestBed.get(ToggleLibService);
    expect(service).toBeTruthy();
  });
});
