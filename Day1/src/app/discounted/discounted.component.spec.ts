import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountedComponent } from './discounted.component';

describe('DiscountedComponent', () => {
  let component: DiscountedComponent;
  let fixture: ComponentFixture<DiscountedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
