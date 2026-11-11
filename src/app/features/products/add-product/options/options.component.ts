// import { Component, model, signal } from '@angular/core';
// import { TogglerComponent } from '../toggler/toggler.component';
// import { InputComponent } from '../input/input.component';
// import { Option } from './type';

// @Component({
//   imports: [TogglerComponent, InputComponent],
//   selector: 'app-options',
//   styles: ``,
//   templateUrl: './options.component.html',
// })
// export class OptionsComponent {
//   optionKey = signal<string>('');
//   optionValue = signal<string>('');

//   resetForm = () => {
//     this.optionKey.set('');
//     this.optionValue.set('');
//   };

//   isMultipleOptions = model(false);

//   options = model<Option[]>([{}]);

//   addOption = (newOption: Option) => {
//     this.resetForm();
//     this.options.update((currentOptions) => [...currentOptions, newOption]);
//   };
// }

import { Component, computed, model, signal } from '@angular/core';
import { TogglerComponent } from '../toggler/toggler.component';
import { InputComponent } from '../input/input.component';
import { Option } from './type';
import { Times } from '@primeicons/angular/times';

@Component({
  imports: [TogglerComponent, InputComponent, Times],
  selector: 'app-options',
  styles: ``,
  styleUrls: ['./options.component.css', '../../../../../styles.css'],
  templateUrl: './options.component.html',
})
export class OptionsComponent {
  isMultipleOptions = model(false);

  options = model<Option[]>([]);
  optionValue = signal<string>('');

  addValue = (optionIndex: number, inputElement: any) => {
    const valueToAdd = inputElement.value.trim() || inputElement.value()?.trim();
    if (!valueToAdd) return;

    this.options.update((currentOptions) => {
      return currentOptions.map((option, idx) => {
        if (idx === optionIndex) {
          if (option.values.includes(valueToAdd)) return option;
          return { ...option, values: [...option.values, valueToAdd] };
        }
        return option;
      });
    });

    inputElement.value = '';
  };

  removeValue = (optionIndex: number, valueIndex: number) => {
    this.options.update((currentOptions) =>
      currentOptions.map((option, idx) => {
        if (idx === optionIndex) {
          return { ...option, values: option.values.filter((_, vIdx) => vIdx !== valueIndex) };
        }
        return option;
      }),
    );
  };

  addOption = () => {
    this.options.update((opt) => [...opt, { key: '', values: [] }]);
  };

  listStyles = computed(() => (this.options().length > 0 ? 'mt-10' : ''));

  isDown = false;
  startX = 0;
  scrollLeft = 0;

  startDragging(e: MouseEvent, container: HTMLUListElement) {
    this.isDown = true;
    this.startX = e.pageX - container.offsetLeft;
    this.scrollLeft = container.scrollLeft;
  }

  stopDragging() {
    this.isDown = false;
  }

  moveEvent(e: MouseEvent, container: HTMLUListElement) {
    if (!this.isDown) return;
    e.preventDefault();

    const x = e.pageX - container.offsetLeft;
    const walk = (x - this.startX) * 1.5;
    container.scrollLeft = this.scrollLeft - walk;
  }
}
