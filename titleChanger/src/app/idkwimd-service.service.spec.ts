import { TestBed } from '@angular/core/testing';

import { IdkwimdServiceService } from './idkwimd-service.service';

describe('IdkwimdServiceService', () => {
  let service: IdkwimdServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdkwimdServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
