import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentStatusMarkerComponent } from './payment-status-marker.component';

describe('PaymentStatusMarkerComponent', () => {
  let component: PaymentStatusMarkerComponent;
  let fixture: ComponentFixture<PaymentStatusMarkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentStatusMarkerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentStatusMarkerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
