import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SecondLayout } from './second-layout';

describe('SecondLayout', () => {
  let component: SecondLayout;
  let fixture: ComponentFixture<SecondLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(SecondLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
