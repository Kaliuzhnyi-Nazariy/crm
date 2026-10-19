import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForthLayout } from './forth-layout';

describe('ForthLayout', () => {
  let component: ForthLayout;
  let fixture: ComponentFixture<ForthLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForthLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(ForthLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
