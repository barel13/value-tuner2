import { TestBed } from '@angular/core/testing';

import { FireLogService } from './fire-log.service';

describe('FireLogService', () => {
  let service: FireLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
