import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MostVisitedPagesComponent } from './most-visited-pages.component';

describe('MostVistedPagesComponent', () => {
  let component: MostVisitedPagesComponent;
  let fixture: ComponentFixture<MostVisitedPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostVisitedPagesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MostVisitedPagesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
