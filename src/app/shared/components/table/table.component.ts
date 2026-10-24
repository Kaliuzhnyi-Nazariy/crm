// // import { Component, input } from '@angular/core';

// // @Component({
// //   imports: [],
// //   selector: 'app-table',
// //   styles: ``,
// //   standalone: true,
// //   templateUrl: './table.component.html',
// // })
// // export class TableComponent<T> {
// //   headeeStyles = 'shrink-0 py-4 border border-b-2 border-b-(--general-40)';
// //   tableLineStyles = 'shrink-0 py-4';

// //   orders = input.required<T[]>();

// //   checkboxHandler = input.required<(id: string) => void>();
// //   headerCheckboxHandler = input.required<() => void>();

// //   selectedOrders = input<string[]>([]);

// //   selectAllOrdersCheckbox = input<boolean>(false);

// //   isChecked(id: string): boolean {
// //     const selected = this.selectedOrders();
// //     return selected ? selected.includes(id) : false;
// //   }
// // }

// import { Component, input, computed } from '@angular/core';
// import { CommonModule } from '@angular/common';

// // 1. Define a flexible column configuration interface
// export interface TableColumn<T> {
//   header: string;
//   key: keyof T | string; // Can be a direct key or a custom identifier
//   widthClass: string; // e.g., 'w-[12.5%]' or 'w-[17%]'
//   cellClass?: string; // e.g., 'font-bold'
// }

// @Component({
//   selector: 'app-table',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './table.component.html',
// })
// export class TableComponent<T> {
//   // Reusable styles
//   headerStyles = 'shrink-0 py-4 border border-b-2 border-b-(--general-40)';
//   tableLineStyles = 'shrink-0 py-4';

//   // Core dynamic inputs
//   orders = input.required<T[]>(); // This acts as your rows dataset
//   columns = input.required<TableColumn<T>[]>();

//   // A function telling the component how to extract a unique string ID from any object T
//   trackIdFn = input.required<(item: T) => string>();

//   // Handlers
//   checkboxHandler = input.required<(id: string) => void>();
//   headerCheckboxHandler = input.required<() => void>();
//   selectedOrders = input<string[]>([]);
//   selectAllOrdersCheckbox = input<boolean>(false);

//   // Helper method to safely pull values dynamically out of your object T
//   getCellValue(item: T, key: keyof T | string): any {
//     return (item as any)[key] ?? '';
//   }

//   isChecked(item: T): boolean {
//     const id = this.trackIdFn()(item);
//     const selected = this.selectedOrders();
//     return selected ? selected.includes(id) : false;
//   }
// }

import { Component, input, contentChild, TemplateRef } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './table.component.html',
  styles: `
    @reference "tailwindcss";

    /* Użycie ::ng-deep wymusza aplikowanie stylów do wstrzykniętych komórek ng-template */
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

  orders = input.required<T[]>();
  trackIdFn = input.required<(item: T) => string>();

  checkboxHandler = input.required<(id: string) => void>();
  headerCheckboxHandler = input.required<() => void>();
  selectedOrders = input<string[]>([]);
  selectAllOrdersCheckbox = input<boolean>(false);

  headerTemplate = contentChild<TemplateRef<any>>('header');
  rowTemplate = contentChild<TemplateRef<{ $implicit: T }>>('row');

  isChecked(item: T): boolean {
    const id = this.trackIdFn()(item);
    const selected = this.selectedOrders();
    return selected ? selected.includes(id) : false;
  }

  // Wymuszenie kontekstu typowania dla let-o
  static ngTemplateContextGuard<T>(dir: TableComponent<T>, ctx: any): ctx is { $implicit: T } {
    return true;
  }
}
