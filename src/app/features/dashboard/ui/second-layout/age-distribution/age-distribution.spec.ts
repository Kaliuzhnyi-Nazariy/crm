import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgeDistribution } from './age-distribution';

describe('AgeDistribution', () => {
  let component: AgeDistribution;
  let fixture: ComponentFixture<AgeDistribution>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgeDistribution],
    }).compileComponents();

    fixture = TestBed.createComponent(AgeDistribution);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
