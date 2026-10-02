import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderUtilityNavComponent } from './header-utility-nav.component';

describe('HeaderUtilityNavComponent', () => {
  let component: HeaderUtilityNavComponent;
  let fixture: ComponentFixture<HeaderUtilityNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderUtilityNavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderUtilityNavComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
