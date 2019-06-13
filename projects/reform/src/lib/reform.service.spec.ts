import { TestBed } from '@angular/core/testing';

import { ReformService } from './reform.service';

describe('ReformService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReformService = TestBed.get(ReformService);
    expect(service).toBeTruthy();
  });
});
