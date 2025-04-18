import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewlyAddedRestaurantComponent } from './newly-added-restaurant.component';

describe('NewlyAddedRestaurantComponent', () => {
  let component: NewlyAddedRestaurantComponent;
  let fixture: ComponentFixture<NewlyAddedRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewlyAddedRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewlyAddedRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
