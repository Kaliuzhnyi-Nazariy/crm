import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdersOverTimeComponent } from './orders-over-time.component';

describe('OrdersOverTimeComponent', () => {
  let component: OrdersOverTimeComponent;
  let fixture: ComponentFixture<OrdersOverTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersOverTimeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersOverTimeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
