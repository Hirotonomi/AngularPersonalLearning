import { TestBed } from '@angular/core/testing';

import { ParagrafTextService } from './paragraf-text.service';

describe('ParagrafTextService', () => {
  let service: ParagrafTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParagrafTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
