import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserStatisticsComponent } from './user-statistics.component';

describe('UserStatisticsComponent', () => {
  let component: UserStatisticsComponent;
  let fixture: ComponentFixture<UserStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserStatisticsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserStatisticsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
