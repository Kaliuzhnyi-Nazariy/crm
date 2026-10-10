import { Component } from '@angular/core';
import { InfoBlockComponent } from '../../../../../shared/components/info-block/info-block.component';
import { DecimalPipe } from '@angular/common';

@Component({
  imports: [InfoBlockComponent, DecimalPipe],
  selector: 'app-top-products',
  styles: ``,
  templateUrl: './top-products.component.html',
})
export class TopProductsComponent {
  products = [
    {
      id: 1,
      name: 'Men Grey Hoodie',
      price: 49.9,
      unitsSold: 204,
      imageUrl: '',
    },
    {
      id: 2,
      name: 'Women Striped T-Shirt',
      price: 34.9,
      unitsSold: 155,
      imageUrl: '',
    },
    {
      id: 3,
      name: 'Home White T-Shirt',
      price: 40.9,
      unitsSold: 120,
      imageUrl: '',
    },
    {
      id: 4,
      name: 'Men White T-Shirt',
      price: 49.9,
      unitsSold: 204,
      imageUrl: '',
    },
    {
      id: 5,
      name: 'Women Red T-Shirt',
      price: 34.9,
      unitsSold: 155,
      imageUrl: '',
    },
  ];
}
