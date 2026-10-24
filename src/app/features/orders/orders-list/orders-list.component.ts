import { Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { ContentComponent } from '../../../core/layout/content/content.component';
import { Plus } from '@primeicons/angular/plus';
import { InfoBlockComponent } from '../../../shared/components/info-block/info-block.component';
import { EmptyListComponent } from './empty-list/empty-list.component';
import { OrdersTableComponent } from './orders-table/orders-table.component';
import { Order } from '../types';
import { PaginationComponent } from '../../../shared/components/pagination/pagination.component';
import { Paginator } from '../../../core/services/paginator/paginator';
import { FilterBlockComponent } from '../../../shared/filters/filter-block/filter-block.component';

@Component({
  imports: [
    ContentComponent,
    InfoBlockComponent,
    // ButtonComponent,
    EmptyListComponent,
    OrdersTableComponent,
    // PaginatorModule,
    PaginationComponent,
    FilterBlockComponent,
  ],
  selector: 'app-orders-list',
  styles: `
    :host {
      height: 100dvh;
    }
  `,
  styleUrl: '../../../../styles.css',
  templateUrl: './orders-list.component.html',
})
export class OrdersListComponent {
  protected paginator = inject(Paginator);

  orders: Order[] = [
    {
      order: '#12512B',
      date: 'May 5, 4:20 PM',
      customer: 'Tom Anderson',
      payment_status: 'Paid',
      order_status: 'Ready',
      total: 49.9,
    },
    {
      order: '#12523C',
      date: 'May 5, 4:15 PM',
      customer: 'Jayden Walker',
      payment_status: 'Paid',
      order_status: 'Ready',
      total: 34.36,
    },
    {
      order: '#51232A',
      date: 'May 5, 4:15 PM',
      customer: 'Inez Kim',
      payment_status: 'Paid',
      order_status: 'Ready',
      total: 5.51,
    },
    {
      order: '#23534D',
      date: 'May 5, 4:12 PM',
      customer: 'Francisco Henry',
      payment_status: 'Paid',
      order_status: 'Shipped',
      total: 29.74,
    },
    {
      order: '#51323C',
      date: 'May 5, 4:12 PM',
      customer: 'Violet Phillips',
      payment_status: 'Paid',
      order_status: 'Shipped',
      total: 23.06,
    },
    {
      order: '#35622A',
      date: 'May 5, 4:12 PM',
      customer: 'Rosetta Becker',
      payment_status: 'Paid',
      order_status: 'Shipped',
      total: 87.44,
    },
    {
      order: '#34232D',
      date: 'May 5, 4:10 PM',
      customer: 'Dean Love',
      payment_status: 'Paid',
      order_status: 'Ready',
      total: 44.55,
    },
    {
      order: '#56212D',
      date: 'May 5, 4:08 PM',
      customer: 'Nettie Tyler',
      payment_status: 'Paid',
      order_status: 'Ready',
      total: 36.79,
    },
    {
      order: '#76543E',
      date: 'May 5, 4:08 PM',
      customer: 'Lora Weaver',
      payment_status: 'Paid',
      order_status: 'Shipped',
      total: 28.78,
    },
    {
      order: '#12512L',
      date: 'May 5, 4:05 PM',
      customer: 'Vincent Cannon',
      payment_status: 'Paid',
      order_status: 'Shipped',
      total: 96.46,
    },
    {
      order: '#76543P',
      date: 'May 5, 4:08 PM',
      customer: 'Lora Weaver',
      payment_status: 'Paid',
      order_status: 'Shipped',
      total: 28.78,
    },
    {
      order: '#12512Q',
      date: 'May 5, 4:05 PM',
      customer: 'Vincent Cannon',
      payment_status: 'Paid',
      order_status: 'Shipped',
      total: 96.46,
    },
  ];

  selectedOrders = signal<string[]>([]);
  actionsDisabled = computed(() => this.selectedOrders().length === 0);

  computedOrders = computed(() => {
    return this.orders.slice(
      (this.paginator.page() - 1) * this.paginator.perPage(),
      this.paginator.page() * this.paginator.perPage(),
    );
  });

  selectAllOrdersCheckbox = computed(() => {
    const currentOrders = this.computedOrders();

    if (currentOrders.length === 0) return false;

    const currentSelected = this.selectedOrders();

    return currentOrders.every((o) => currentSelected.includes(o.order));
  });

  headerCheckboxHandler = () => {
    const currentOrders = this.computedOrders();
    const currentSelected = this.selectedOrders();

    console.log(currentOrders);

    const allSelected = currentOrders.every((o) => currentSelected.includes(o.order));

    if (allSelected) {
      const currentOrderIds = currentOrders.map((o) => o.order);
      this.selectedOrders.set(currentSelected.filter((id) => !currentOrderIds.includes(id)));
    } else {
      const newSelections = currentOrders.map((o) => o.order);
      const uniqueSelections = Array.from(new Set([...currentSelected, ...newSelections]));
      this.selectedOrders.set(uniqueSelections);
      // this.selectAllOrdersCheckbox.set(true);
    }
  };

  checkboxHandler = (orderId: string) => {
    this.selectedOrders.update((current) => {
      if (current.includes(orderId)) {
        // this.selectAllOrdersCheckbox.set(false);

        return current.filter((id) => id !== orderId);
      } else {
        console.log(orderId);
        console.log([...current, orderId]);
        console.log(this.computedOrders().length);
        console.log([...current, orderId].length === this.computedOrders().length);
        if ([...current, orderId].length === this.computedOrders().length) {
          // this.selectAllOrdersCheckbox.set(true);
        }
        return [...current, orderId];
      }
    });
  };

  addOrder = {
    name: 'Add order',
    icon: Plus,
    fn: () => alert('add order'),
  };

  export = {
    name: 'Export',
    fn: () => alert('Exported'),
  };

  styles = computed(() => {
    const ifEmpty =
      this.orders.length === 0
        ? 'flex justify-center items-center h-full'
        : 'grid grid-rows-[auto_1fr_auto]';

    return ` overflow-hidden w-full h-full ${ifEmpty}`;
  });

  deleteOrder = (id: string) => console.log(id);
  editOrder = (id: string) => console.log(id);

  filters = ['cutomer', 'order', 'date', 'total'];
}
