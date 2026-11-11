import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductInformationComponent } from './product-information.component';

describe('ProductInformationComponent', () => {
  let component: ProductInformationComponent;
  let fixture: ComponentFixture<ProductInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductInformationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductInformationComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
