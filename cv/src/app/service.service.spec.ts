import { TestBed } from '@angular/core/testing';

import { SService } from './service.service';

describe('SService', () => {
  let service: SService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
