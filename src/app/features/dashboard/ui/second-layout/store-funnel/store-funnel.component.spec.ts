import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreFunnelComponent } from './store-funnel.component';

describe('StoreFunnelComponent', () => {
  let component: StoreFunnelComponent;
  let fixture: ComponentFixture<StoreFunnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreFunnelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StoreFunnelComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
