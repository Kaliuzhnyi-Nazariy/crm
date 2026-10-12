import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeneralData } from './general-data';

describe('GeneralData', () => {
  let component: GeneralData;
  let fixture: ComponentFixture<GeneralData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralData],
    }).compileComponents();

    fixture = TestBed.createComponent(GeneralData);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
