import { Component, computed, input, output } from '@angular/core';
import { Layout, LayoutIds } from '../types';

@Component({
  imports: [],
  selector: 'app-layout-card',
  styles: ``,
  templateUrl: './layout-card.component.html',
})
export class LayoutCardComponent {
  data = input.required<Layout>();
  layoutPicked = input<string>('first');

  layoutSelected = output<string>();

  pickLayout(id: string) {
    this.layoutSelected.emit(id);
  }

  styles = (pickedLayout: LayoutIds) =>
    computed(() => {
      const isActive = pickedLayout === this.layoutPicked();
      return `w-full  bg-white  rounded-md border transition-colors duration-150 flex flex-col h-full w-full outline-none   ${isActive ? 'border-(--primary-100)' : 'border-transparent hover:border-(--primary-50) focus:border-(--primary-50)'}`;
    });
}
