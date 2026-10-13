import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeneralDataInfo } from './general-data-info';

describe('GeneralDataInfo', () => {
  let component: GeneralDataInfo;
  let fixture: ComponentFixture<GeneralDataInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralDataInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(GeneralDataInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
