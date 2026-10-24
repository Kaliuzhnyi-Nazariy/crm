import { Component, computed, input } from '@angular/core';
import { Order } from '../../types';

@Component({
  imports: [],
  selector: 'app-orders-table',
  styles: `
    :host {
      display: flex;
      flex-direction: column;
    }
  `,
  //   flex-basis: 0%;
  // flex: 1;
  // shrink: 0;
  styleUrl: '../../../../../styles.css',
  templateUrl: './orders-table.component.html',
})
export class OrdersTableComponent {
  orders = input<Order[]>([]);

  checkboxHandler = input.required<(id: string) => void>();
  headerCheckboxHandler = input.required<() => void>();

  selectedOrders = input<string[]>([]);

  selectAllOrdersCheckbox = input<boolean>(false);

  isChecked(id: string): boolean {
    const selected = this.selectedOrders();
    return selected ? selected.includes(id) : false;
  }
}
