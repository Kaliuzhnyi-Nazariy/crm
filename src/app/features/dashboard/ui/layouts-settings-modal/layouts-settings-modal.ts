import { Component, input, model, output } from '@angular/core';
import { Modal } from '../../../../shared/components/modal/modal';
import { LocalStorage } from '../../../../core/services/local-storage';

@Component({
  imports: [Modal],
  selector: 'app-layouts-settings-modal',
  styles: ``,
  templateUrl: './layouts-settings-modal.html',
})
export class LayoutsSettingsModal {
  visible = model<boolean>(false);

  openModal = input<{ fn: () => void }>();

  layoutChange = output<string>();

  layoutPicked = 'first';

  constructor(private localStorageService: LocalStorage) {
    this.layoutPicked = this.localStorageService.getItem('layoutId') || 'first';
  }

  pickLayout = (layoutId: string) => {
    this.layoutPicked = layoutId;
  };

  // clickHandle = (layoutId: string) => {
  //   this.localStorageService.setItem('layoutId', layoutId);
  //   this.layoutChange.emit(layoutId);
  //   this.visible.set(false);
  // };

  clickHandle = () => {
    this.localStorageService.setItem('layoutId', this.layoutPicked);
    this.layoutChange.emit(this.layoutPicked);
    this.visible.set(false);
  };
}
