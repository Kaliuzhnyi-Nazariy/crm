import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DistributionByCountryComponent } from './distribution-by-country.component';

describe('DistributionByCountryComponent', () => {
  let component: DistributionByCountryComponent;
  let fixture: ComponentFixture<DistributionByCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistributionByCountryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DistributionByCountryComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
