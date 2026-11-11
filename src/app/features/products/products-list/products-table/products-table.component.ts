import { Component, effect, input } from '@angular/core';
import { TableComponent } from '../../../../shared/components/table/table.component';
import { InventoryMarkerComponent } from './inventory-marker/inventory-marker.component';

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
  imports: [TableComponent, InventoryMarkerComponent],
  selector: 'app-products-table',
  styles: ``,
  templateUrl: './products-table.component.html',
})
export class ProductsTableComponent {
  products = input.required<Product[]>();

  checkboxHandler = input.required<(id: string) => void>();
  headerCheckboxHandler = input.required<() => void>();
  selectedProducts = input<string[]>([]);
  isAllItemsSelected = input<boolean>(false);

  constructor() {
    effect(() => {
      console.log('table', this.isAllItemsSelected());
    });
  }

  trackByProductId = (product: Product) => product.id;
}
