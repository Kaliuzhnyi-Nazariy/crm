import { Component, model } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { TogglerComponent } from '../toggler/toggler.component';

@Component({
  imports: [InputComponent, TogglerComponent],
  selector: 'app-product-price',
  styles: ``,
  templateUrl: './product-price.component.html',
})
export class ProductPriceComponent {
  productPrice = model<string>('');
  productDiscountPrice = model<string>('');

  addTax = model<boolean>(false);
}
