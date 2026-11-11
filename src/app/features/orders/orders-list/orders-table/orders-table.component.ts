
import { Component, effect, input } from '@angular/core';
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
  isAllItemsSelected = input<boolean>(false);

  constructor() {
    effect(() => {
      console.log('selected orders: ', this.selectedOrders());
    });
  }

  getOrderId = (item: Order) => item.id;
}
