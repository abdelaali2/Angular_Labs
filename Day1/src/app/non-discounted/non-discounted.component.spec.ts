import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonDiscountedComponent } from './non-discounted.component';

describe('NonDiscountedComponent', () => {
  let component: NonDiscountedComponent;
  let fixture: ComponentFixture<NonDiscountedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonDiscountedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonDiscountedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
