import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopSalesmanComponent } from './top-salesman.component';

describe('TopSalesmanComponent', () => {
  let component: TopSalesmanComponent;
  let fixture: ComponentFixture<TopSalesmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopSalesmanComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TopSalesmanComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
