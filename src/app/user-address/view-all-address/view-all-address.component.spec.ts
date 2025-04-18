import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllAddressComponent } from './view-all-address.component';

describe('ViewAllAddressComponent', () => {
  let component: ViewAllAddressComponent;
  let fixture: ComponentFixture<ViewAllAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
