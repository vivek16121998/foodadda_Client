import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRatingBasedRestaurantComponent } from './show-rating-based-restaurant.component';

describe('ShowRatingBasedRestaurantComponent', () => {
  let component: ShowRatingBasedRestaurantComponent;
  let fixture: ComponentFixture<ShowRatingBasedRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowRatingBasedRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRatingBasedRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
