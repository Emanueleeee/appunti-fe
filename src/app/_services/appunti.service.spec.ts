import { TestBed } from '@angular/core/testing';

import { AppuntiService } from './appunti.service';

describe('AppuntiService', () => {
  let service: AppuntiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppuntiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
