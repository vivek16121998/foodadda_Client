import { TestBed } from '@angular/core/testing';

import { AreaRecommendationService } from './area-recommendation.service';

describe('AreaRecommendationService', () => {
  let service: AreaRecommendationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreaRecommendationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
