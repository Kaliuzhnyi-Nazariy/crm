// import { Component, computed, input } from '@angular/core';
// import { Order } from '../../types';
// import { TableComponent } from '../../../../shared/components/table/table.component';

// @Component({
//   imports: [TableComponent],
//   selector: 'app-orders-table',
//   styles: `
//     :host {
//       display: flex;
//       flex-direction: column;
//     }
//   `,
//   //   flex-basis: 0%;
//   // flex: 1;
//   // shrink: 0;
//   styleUrl: '../../../../../styles.css',
//   templateUrl: './orders-table.component.html',
// })
// export class OrdersTableComponent {
//   orders = input<Order[]>([]);

//   checkboxHandler = input.required<(id: string) => void>();
//   headerCheckboxHandler = input.required<() => void>();

//   selectedOrders = input<string[]>([]);

//   selectAllOrdersCheckbox = input<boolean>(false);

//   isChecked(id: string): boolean {
//     const selected = this.selectedOrders();
//     return selected ? selected.includes(id) : false;
//   }
// }

import { Component, input } from '@angular/core';
import { Order } from '../../types';
import { TableComponent } from '../../../../shared/components/table/table.component';
import { PaymentStatusMarkerComponent } from './payment-status-marker/payment-status-marker.component';
import { OrderStatusMarkerComponent } from './order-status-marker/order-status-marker.component';

@Component({
  selector: 'app-orders-table',
  standalone: true,
  imports: [TableComponent, PaymentStatusMarkerComponent, OrderStatusMarkerComponent],
  templateUrl: './orders-table.component.html',
  styles: `
    :host {
      display: flex;
      flex-direction: column;
    }
  `,
  styleUrl: '../../../../../styles.css',
})
export class OrdersTableComponent {
  orders = input.required<Order[]>();

  checkboxHandler = input.required<(id: string) => void>();
  headerCheckboxHandler = input.required<() => void>();
  selectedOrders = input<string[]>([]);
  selectAllOrdersCheckbox = input<boolean>(false);

  getOrderId = (item: Order) => item.order;
}
