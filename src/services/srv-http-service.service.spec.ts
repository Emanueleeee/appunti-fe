import { TestBed } from '@angular/core/testing';

import { SrvHttpServiceService } from './srv-http-service.service';

describe('SrvHttpServiceService', () => {
  let service: SrvHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
