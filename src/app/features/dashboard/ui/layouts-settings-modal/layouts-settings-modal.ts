import { Component, computed, effect, input, model, output } from '@angular/core';
import { Modal } from '../../../../shared/components/modal/modal';
import { LocalStorage } from '../../../../core/services/local-storage/local-storage';
import { Layout } from './types';
import { LayoutCardComponent } from './layout-card/layout-card.component';
import { ButtonComponent } from '../../../../shared/components/modal/button/button.component';

@Component({
  imports: [Modal, LayoutCardComponent, ButtonComponent],
  selector: 'app-layouts-settings-modal',
  styles: ``,
  templateUrl: './layouts-settings-modal.html',
})
export class LayoutsSettingsModal {
  visible = model<boolean>(false);

  openModal = input<{ fn: () => void }>();

  layouts: Layout[] = [
    {
      id: 'first',
      img: '',
      contains: [
        'General data',
        'Orders over time',
        'Last 7 days sales',
        'Recent transactions',
        'Top products by units sold',
      ],
    },
    {
      id: 'second',
      img: '',
      contains: [
        'User statistics',
        'Store Funnel',
        'Age distribution',
        'Most Visited Pages',
        'Social Media Performance',
      ],
    },
    {
      id: 'third',
      img: '',
      contains: [
        'Finance report',
        'General user data',
        'Top salesman',
        'Collections sold',
        'Returned Items',
      ],
    },
    {
      id: 'forth',
      img: '',
      contains: [
        'General user data',
        'Unique Visits Over Time',
        'Recent transactions',
        'Distribution by country',
      ],
    },
  ];

  layoutChange = output<string>();

  layoutPicked = 'first';

  constructor(private localStorageService: LocalStorage) {
    effect(() => {
      if (this.visible()) {
        this.layoutPicked = this.localStorageService.getItem<string>('layoutId') || 'first';
      }
    });
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

  // styles = (pickedLayout: LayoutIds) =>
  //   computed(() => {
  //     const isActive = pickedLayout === this.layoutPicked;
  //     return `w-full  bg-white  rounded-md border ${isActive ? 'border-(--primary-100)' : 'border-transparent'}`;
  //   });
}
