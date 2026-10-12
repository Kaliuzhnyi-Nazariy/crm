import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutsSettingsModal } from './layouts-settings-modal';

describe('LayoutsSettingsModal', () => {
  let component: LayoutsSettingsModal;
  let fixture: ComponentFixture<LayoutsSettingsModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutsSettingsModal],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutsSettingsModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
