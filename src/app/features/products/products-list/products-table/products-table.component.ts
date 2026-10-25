import { Component, input } from '@angular/core';
import { TableComponent } from '../../../../shared/components/table/table.component';

type Product = {
  id: string;
  productName: string;
  categoryName: string;
  inventoryStatus: number;
  productColor: string;
  productPrice: number;
  averageRating: number;
  totalVotes: number;
};

@Component({
  imports: [TableComponent],
  selector: 'app-products-table',
  styles: ``,
  templateUrl: './products-table.component.html',
})
export class ProductsTableComponent {
  products = input.required<Product[]>();

  checkboxHandler = input.required<(id: string) => void>();
  headerCheckboxHandler = input.required<() => void>();
  selectedOrders = input<string[]>([]);
  selectAllOrdersCheckbox = input<boolean>(false);

  getOrderId = (item: Product) => item.id;
}
