import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaRecommendationComponent } from './area-recommendation.component';

describe('AreaRecommendationComponent', () => {
  let component: AreaRecommendationComponent;
  let fixture: ComponentFixture<AreaRecommendationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaRecommendationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
