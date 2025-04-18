import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckMenuComponent } from './check-menu.component';

describe('CheckMenuComponent', () => {
  let component: CheckMenuComponent;
  let fixture: ComponentFixture<CheckMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
