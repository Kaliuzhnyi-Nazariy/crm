// import { computed, Injectable, input, signal } from '@angular/core';

// export interface Identifiable {
//   id: string;
// }

// @Injectable({
//   providedIn: 'root',
// })
// export class TableOperations<T extends Identifiable> {
//   selectedItems = signal<T[]>([]);
//   actionsDisabled = computed(() => this.selectedItems().length === 0);

//   computedItems = signal<T[]>([]);

//   selectAllOrdersCheckbox = computed(() => {
//     const currentItems = this.computedItems();

//     if (currentItems.length === 0) return false;

//     const currentSelected = this.selectedItems();

//     return currentItems.every((i) => currentSelected.includes(i.id));
//   });

//   headerCheckboxHandler = () => {
//     const currentItems = this.computedItems();
//     const currentSelected = this.selectedItems();

//     const allSelected = currentItems.every((i) => currentSelected.includes(i.id));

//     if (allSelected) {
//       const currentItemIds = currentItems.map((i) => i.id);
//       this.selectedItems.set(currentSelected.filter((id) => !currentItemIds.includes(id)));
//     } else {
//       const newSelections = currentItems.map((i) => i.id);
//       const uniqueSelections = Array.from(new Set([...currentSelected, ...newSelections]));
//       this.selectedItems.set(uniqueSelections);
//       // this.selectAllOrdersCheckbox.set(true);
//     }
//   };

//   checkboxHandler = (orderId: string) => {
//     this.selectedItems.update((current) => {
//       if (current.includes(orderId)) {
//         // this.selectAllOrdersCheckbox.set(false);

//         return current.filter((id) => id !== orderId);
//       } else {
//         // console.log(orderId);
//         // console.log([...current, orderId]);
//         // console.log(this.computedOrders().length);
//         // console.log([...current, orderId].length === this.computedOrders().length);
//         if ([...current, orderId].length === this.computedItems().length) {
//           // this.selectAllOrdersCheckbox.set(true);
//         }
//         return [...current, orderId];
//       }
//     });
//   };
// }

import { Injectable, computed, signal } from '@angular/core';

export interface Identifiable {
  id: string;
}

@Injectable()
export class TableOperationsService<T extends Identifiable> {
  readonly items = signal<T[]>([]);
  readonly selectedIds = signal<string[]>([]);

  readonly hasSelections = computed(() => this.selectedIds().length > 0);
  readonly actionsDisabled = computed(() => !this.hasSelections());

  readonly isAllSelected = computed(() => {
    const currentItems = this.items();
    if (currentItems.length === 0) return false;

    const selected = this.selectedIds();
    return currentItems.every((item) => selected.includes(item.id));
  });

  setData(newItems: T[]): void {
    this.items.set(newItems);

    const newItemIds = newItems.map((i) => i.id);
    this.selectedIds.update((current) => current.filter((id) => newItemIds.includes(id)));
  }

  toggleAll(): void {
    const currentItems = this.items();

    if (this.isAllSelected()) {
      const currentItemIds = currentItems.map((i) => i.id);
      this.selectedIds.update((current) => current.filter((id) => !currentItemIds.includes(id)));
    } else {
      const allIds = currentItems.map((i) => i.id);
      this.selectedIds.update((current) => Array.from(new Set([...current, ...allIds])));
    }
  }

  toggleItem(id: string): void {
    this.selectedIds.update((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }

  clearSelections(): void {
    this.selectedIds.set([]);
  }
}
