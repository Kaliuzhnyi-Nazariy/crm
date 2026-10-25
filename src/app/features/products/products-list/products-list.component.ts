import { Component, computed, effect, inject, signal, ViewEncapsulation } from '@angular/core';
import { ContentComponent } from '../../../core/layout/content/content.component';
import { InfoBlockComponent } from '../../../shared/components/info-block/info-block.component';
import { Button } from '../../../shared/components/button/button.type';
import { Router } from '@angular/router';
import { Plus } from '@primeicons/angular/plus';
import { EmptyListComponent } from '../../../shared/components/empty-list/empty-list.component';
import { Paginator } from '../../../core/services/paginator/paginator';
import { TableOperationsService } from '../../../core/services/table-operations/table-operations';
import { FilterBlockComponent } from '../../../shared/filters/filter-block/filter-block.component';

import { ProductsTableComponent } from './products-table/products-table.component';
import { PaginationComponent } from '../../../shared/components/pagination/pagination.component';

@Component({
  imports: [
    ContentComponent,
    InfoBlockComponent,
    EmptyListComponent,
    FilterBlockComponent,
    ProductsTableComponent,
    PaginationComponent,
  ],
  selector: 'app-products-list',
  styles: ``,
  host: { class: 'list' },
  providers: [TableOperationsService],
  styleUrl: '../../../../styles.css',
  templateUrl: './products-list.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ProductsListComponent {
  protected tableState = inject(TableOperationsService);

  products = [
    {
      id: '1',
      productName: 'Men Grey Hoodie',
      categoryName: 'Hoodies',
      inventoryStatus: 96,
      productColor: 'Black',
      productPrice: 49.9,
      averageRating: 5.0,
      totalVotes: 32,
    },
    {
      id: '2',
      productName: 'Women Striped T Shirt',
      categoryName: 'T Shirt',
      inventoryStatus: 56,
      productColor: 'White',
      productPrice: 34.9,
      averageRating: 4.8,
      totalVotes: 24,
    },
    {
      id: '3',
      productName: 'Women White T Shirt',
      categoryName: 'T Shirt',
      inventoryStatus: 78,
      productColor: 'White',
      productPrice: 40.9,
      averageRating: 5.0,
      totalVotes: 54,
    },
    {
      id: '4',
      productName: 'Men White T Shirt',
      categoryName: 'T Shirt',
      inventoryStatus: 32,
      productColor: 'White',
      productPrice: 49.9,
      averageRating: 4.5,
      totalVotes: 31,
    },
    {
      id: '5',
      productName: 'Women Red T Shirt',
      categoryName: 'T Shirt',
      inventoryStatus: 32,
      productColor: 'White',
      productPrice: 34.9,
      averageRating: 4.9,
      totalVotes: 22,
    },
    {
      id: '6',
      productName: 'Men Grey Hoodie',
      categoryName: 'Hoodies',
      inventoryStatus: 96,
      productColor: 'Black',
      productPrice: 49.9,
      averageRating: 5.0,
      totalVotes: 32,
    },
    {
      id: '7',
      productName: 'Women Striped T Shirt',
      categoryName: 'T Shirt',
      inventoryStatus: 56,
      productColor: 'White',
      productPrice: 34.9,
      averageRating: 4.8,
      totalVotes: 24,
    },
    {
      id: '8',
      productName: 'Women White T Shirt',
      categoryName: 'T Shirt',
      inventoryStatus: 0,
      productColor: 'White',
      productPrice: 40.9,
      averageRating: 5.0,
      totalVotes: 54,
    },
    {
      id: '9',
      productName: 'Men White T Shirt',
      categoryName: 'T Shirt',
      inventoryStatus: 0,
      productColor: 'White',
      productPrice: 49.9,
      averageRating: 4.5,
      totalVotes: 31,
    },
    {
      id: '10',
      productName: 'Women Red T Shirt',
      categoryName: 'T Shirt',
      inventoryStatus: 0,
      productColor: 'White',
      productPrice: 34.9,
      averageRating: 4.9,
      totalVotes: 22,
    },
    {
      id: '11',
      productName: 'Men Grey Hoodie',
      categoryName: 'Hoodies',
      inventoryStatus: 96,
      productColor: 'Black',
      productPrice: 49.9,
      averageRating: 5.0,
      totalVotes: 32,
    },
    {
      id: '12',
      productName: 'Women Striped T Shirt',
      categoryName: 'T Shirt',
      inventoryStatus: 56,
      productColor: 'White',
      productPrice: 34.9,
      averageRating: 4.8,
      totalVotes: 24,
    },
    {
      id: '13',
      productName: 'Women White T Shirt',
      categoryName: 'T Shirt',
      inventoryStatus: 0,
      productColor: 'White',
      productPrice: 40.9,
      averageRating: 5.0,
      totalVotes: 54,
    },
    {
      id: '14',
      productName: 'Men White T Shirt',
      categoryName: 'T Shirt',
      inventoryStatus: 0,
      productColor: 'White',
      productPrice: 49.9,
      averageRating: 4.5,
      totalVotes: 31,
    },
    {
      id: '15',
      productName: 'Women Red T Shirt',
      categoryName: 'T Shirt',
      inventoryStatus: 0,
      productColor: 'White',
      productPrice: 34.9,
      averageRating: 4.9,
      totalVotes: 22,
    },
    {
      id: '16',
      productName: 'Men Grey Hoodie',
      categoryName: 'Hoodies',
      inventoryStatus: 96,
      productColor: 'Black',
      productPrice: 49.9,
      averageRating: 5.0,
      totalVotes: 32,
    },
  ];

  constructor(
    private router: Router,
    private paginator: Paginator,
  ) {
    effect(() => {
      this.tableState.setData(this.products);
    });
  }

  exportButton: Button = {
    name: 'Export',
    fn: () => alert('clcked export'),
  };

  addButton: Button = {
    name: 'Add product',
    icon: Plus,
    fn: () => this.router.navigate(['/products/add']),
  };

  // selectedOrders = signal<string[]>([]);
  // actionsDisabled = computed(() => this.selectedOrders().length === 0);

  // computedOrders = computed(() => {
  //   return this.products.slice(
  //     (this.paginator.page() - 1) * this.paginator.perPage(),
  //     this.paginator.page() * this.paginator.perPage(),
  //   );
  // });

  // selectAllOrdersCheckbox = computed(() => {
  //   const currentOrders = this.computedOrders();

  //   if (currentOrders.length === 0) return false;

  //   const currentSelected = this.selectedOrders();

  //   return currentOrders.every((o) => currentSelected.includes(o.order));
  // });

  // headerCheckboxHandler = () => {
  //   const currentOrders = this.computedOrders();
  //   const currentSelected = this.selectedOrders();

  //   const allSelected = currentOrders.every((o) => currentSelected.includes(o.order));

  //   if (allSelected) {
  //     const currentOrderIds = currentOrders.map((o) => o.order);
  //     this.selectedOrders.set(currentSelected.filter((id) => !currentOrderIds.includes(id)));
  //   } else {
  //     const newSelections = currentOrders.map((o) => o.order);
  //     const uniqueSelections = Array.from(new Set([...currentSelected, ...newSelections]));
  //     this.selectedOrders.set(uniqueSelections);
  //     // this.selectAllOrdersCheckbox.set(true);
  //   }
  // };

  // checkboxHandler = (orderId: string) => {
  //   this.selectedOrders.update((current) => {
  //     if (current.includes(orderId)) {
  //       // this.selectAllOrdersCheckbox.set(false);

  //       return current.filter((id) => id !== orderId);
  //     } else {
  //       console.log(orderId);
  //       console.log([...current, orderId]);
  //       console.log(this.computedOrders().length);
  //       console.log([...current, orderId].length === this.computedOrders().length);
  //       if ([...current, orderId].length === this.computedOrders().length) {
  //         // this.selectAllOrdersCheckbox.set(true);
  //       }
  //       return [...current, orderId];
  //     }
  //   });
  // };

  styles = computed(() => {
    const ifEmpty =
      this.products.length === 0
        ? 'flex justify-center items-center h-full'
        : 'grid grid-rows-[auto_1fr_auto]';

    return ` overflow-hidden w-full h-full ${ifEmpty}`;
  });

  deleteOrder = (id: string) => console.log(id);
  editOrder = (id: string) => console.log(id);

  filters = [];
}
