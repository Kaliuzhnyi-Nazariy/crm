import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CollectionsSoldComponent } from './collections-sold.component';

describe('CollectionsSoldComponent', () => {
  let component: CollectionsSoldComponent;
  let fixture: ComponentFixture<CollectionsSoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionsSoldComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CollectionsSoldComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
