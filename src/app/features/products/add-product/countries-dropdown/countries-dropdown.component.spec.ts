import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountriesDropdownComponent } from './countries-dropdown.component';

describe('CountriesDropdownComponent', () => {
  let component: CountriesDropdownComponent;
  let fixture: ComponentFixture<CountriesDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountriesDropdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CountriesDropdownComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
