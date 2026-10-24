import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderStatusMarkerComponent } from './order-status-marker.component';

describe('OrderStatusMarkerComponent', () => {
  let component: OrderStatusMarkerComponent;
  let fixture: ComponentFixture<OrderStatusMarkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderStatusMarkerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderStatusMarkerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
