import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmptyOrdersListComponent } from './empty-orders-list.component';

describe('EmptyOrdersListComponent', () => {
  let component: EmptyOrdersListComponent;
  let fixture: ComponentFixture<EmptyOrdersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyOrdersListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmptyOrdersListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
