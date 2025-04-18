import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedRestaurantsComponent } from './accepted-restaurants.component';

describe('AcceptedRestaurantsComponent', () => {
  let component: AcceptedRestaurantsComponent;
  let fixture: ComponentFixture<AcceptedRestaurantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptedRestaurantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
