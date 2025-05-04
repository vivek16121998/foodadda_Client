import { TestBed } from '@angular/core/testing';

import { ViewAllAddressService } from './view-all-address.service';

describe('ViewAllAddressService', () => {
  let service: ViewAllAddressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewAllAddressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
