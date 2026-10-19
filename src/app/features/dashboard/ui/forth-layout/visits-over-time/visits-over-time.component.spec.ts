import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisitsOverTimeComponent } from './visits-over-time.component';

describe('VisitsOverTimeComponent', () => {
  let component: VisitsOverTimeComponent;
  let fixture: ComponentFixture<VisitsOverTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitsOverTimeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VisitsOverTimeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
