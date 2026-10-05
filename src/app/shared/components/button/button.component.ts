import { Component, computed, input } from '@angular/core';
import { Button } from './button.type';
import { NgComponentOutlet } from '@angular/common';

@Component({
  imports: [NgComponentOutlet],
  selector: 'app-button',
  styles: ``,
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  btnType = input<'main' | 'secondary'>('main');
  settedFunction = input<Button>();

  hasBorder = input<boolean>(true);

  btnStyles = computed(() => {
    const baseStyles =
      'py-2 px-6 rounded-sm flex items-center gap-1 transition-colors focus:outline-none cursor-pointer';

    if (this.btnType() === 'main') {
      return `${baseStyles} bg-(--primary-100) border border-(--primary-100) text-white hover:bg-white hover:text-(--primary-100) focus:bg-white focus:text-(--primary-100)`;
    }

    const borderClass = this.hasBorder() ? 'border border-(--general-50)' : '';

    return `${baseStyles} ${borderClass} text-(--primary-100) hover:bg-(--primary-100)/20 focus:bg-(--primary-100)/20`.trim();
  });
}
