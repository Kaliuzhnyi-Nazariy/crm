import { Component, model } from '@angular/core';
import { InputComponent } from '../input/input.component';

@Component({
  imports: [InputComponent],
  selector: 'app-product-information',
  styles: ``,
  templateUrl: './product-information.component.html',
})
export class ProductInformationComponent {
  productName = model<string>('');
  productDescription = model<string>('');
}
