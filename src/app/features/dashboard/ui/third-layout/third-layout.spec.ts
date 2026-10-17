import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThirdLayout } from './third-layout';

describe('ThirdLayout', () => {
  let component: ThirdLayout;
  let fixture: ComponentFixture<ThirdLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(ThirdLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
