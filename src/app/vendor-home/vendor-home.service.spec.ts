import { TestBed } from '@angular/core/testing';

import { VendorHomeService } from './vendor-home.service';

describe('VendorHomeService', () => {
  let service: VendorHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendorHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
