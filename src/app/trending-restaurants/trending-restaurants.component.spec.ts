import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingRestaurantsComponent } from './trending-restaurants.component';

describe('TrendingRestaurantsComponent', () => {
  let component: TrendingRestaurantsComponent;
  let fixture: ComponentFixture<TrendingRestaurantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingRestaurantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
