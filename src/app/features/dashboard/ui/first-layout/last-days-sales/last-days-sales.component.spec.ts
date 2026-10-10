import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LastDaysSalesComponent } from './last-days-sales.component';

describe('LastDaysSalesComponent', () => {
  let component: LastDaysSalesComponent;
  let fixture: ComponentFixture<LastDaysSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastDaysSalesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LastDaysSalesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
