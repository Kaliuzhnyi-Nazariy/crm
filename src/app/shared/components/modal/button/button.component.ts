import { Component, computed, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-modal-button',
  styles: ``,
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  type = input<'main' | 'secondary'>('main');
  // text = input.required<string>();

  function = input.required<() => void>();

  addMarginTop = input<boolean>(false);

  styles = computed(() => {
    return `${this.addMarginTop() ? 'mt-4' : ''} px-4 py-2 w-3/5 border outline-none rounded mx-auto cursor-pointer transition-colors ${this.type() === 'main' ? 'bg-(--general-80) text-white hover:border-(--general-80) hover:text-(--general-80) hover:bg-transparent focus:border-(--general-80) focus:text-(--general-80) focus:bg-transparent' : 'text-(--general-80) border-(--general-60) bg-transparent hover:text-white hover:bg-(--general-60) hover:text-white hover:bg-(--general-60)'}`;
  });
}
