import { Component, input } from '@angular/core';
import { Trash } from '@primeicons/angular/trash';
import { Pencil } from '@primeicons/angular/pencil';
import { FilterInputComponent } from '../filter-input/filter-input.component';
import { FilterDropdownComponent } from '../filter-dropdown/filter-dropdown.component';

type Func = (id: string) => void;

@Component({
  imports: [Trash, Pencil, FilterInputComponent, FilterDropdownComponent],
  selector: 'app-filter-block',
  styles: ``,
  templateUrl: './filter-block.component.html',
})
// export class FilterBlockComponent {
//   deleteItem = input<Func>();
//   editItem = input<Func>();

//   searchParamName = input<string>();
// }
export class FilterBlockComponent<T extends string> {
  deleteItem = input<Func>();
  editItem = input<Func>();

  searchParamName = input<string>('search');

  filterParamName = input<string>('search');
  filters = input.required<T[]>();

  disabledActions = input<boolean>(false);
}
