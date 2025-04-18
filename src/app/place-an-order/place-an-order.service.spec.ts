import { TestBed } from '@angular/core/testing';

import { PlaceAnOrderService } from './place-an-order.service';

describe('PlaceAnOrderService', () => {
  let service: PlaceAnOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaceAnOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
