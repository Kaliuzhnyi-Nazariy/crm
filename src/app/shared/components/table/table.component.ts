import { Component, input, contentChild, TemplateRef, effect } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './table.component.html',
  styles: `
    @reference "tailwindcss";

    :host ::ng-deep th {
      @apply shrink-0 py-4 border-b-2 border-b-(--general-40);
    }

    :host ::ng-deep td {
      @apply shrink-0 py-4 border-b border-b-(--general-40);
    }
  `,
})
export class TableComponent<T> {
  headerStyles = 'shrink-0 py-4 border-b-2 border-b-(--general-40)';
  tableLineStyles = 'shrink-0 py-4 border-b border-b-(--general-40)';

  constructor() {
    effect(() => {
      console.log('deep tablle:', this.selectedItems());
    });
  }

  items = input.required<T[]>();
  trackIdFn = input.required<(item: T) => string>();

  checkboxHandler = input.required<(id: string) => void>();
  headerCheckboxHandler = input.required<() => void>();
  selectedItems = input<string[]>([]);
  selectedAllItemsCheckbox = input<boolean>(false);

  headerTemplate = contentChild<TemplateRef<any>>('header');
  rowTemplate = contentChild<TemplateRef<{ $implicit: T }>>('row');

  specialStylesBodyRow = input<string>('');

  isChecked(item: T): boolean {
    const id = this.trackIdFn()(item);
    const selected = this.selectedItems();
    return selected ? selected.includes(id) : false;
  }

  static ngTemplateContextGuard<T>(dir: TableComponent<T>, ctx: any): ctx is { $implicit: T } {
    return true;
  }
}
