import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddCouponComponent } from './add-coupon.component';

describe('AddCouponComponent', () => {
  let component: AddCouponComponent;
  let fixture: ComponentFixture<AddCouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCouponComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddCouponComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
