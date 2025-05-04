import { TestBed } from '@angular/core/testing';

import { ViewAllAddressComponentService } from './view-all-address-component.service';

describe('ViewAllAddressComponentService', () => {
  let service: ViewAllAddressComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewAllAddressComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
