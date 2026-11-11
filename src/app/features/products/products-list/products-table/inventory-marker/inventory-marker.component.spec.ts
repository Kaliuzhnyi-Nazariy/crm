import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InventoryMarkerComponent } from './inventory-marker.component';

describe('InventoryMarkerComponent', () => {
  let component: InventoryMarkerComponent;
  let fixture: ComponentFixture<InventoryMarkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryMarkerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InventoryMarkerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
