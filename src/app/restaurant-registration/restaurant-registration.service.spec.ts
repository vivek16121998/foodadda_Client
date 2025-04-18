import { TestBed } from '@angular/core/testing';

import { RestaurantRegistrationService } from './restaurant-registration.service';

describe('RestaurantRegistrationService', () => {
  let service: RestaurantRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
