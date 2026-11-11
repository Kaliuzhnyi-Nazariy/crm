import { Component, computed, effect, model } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { CountriesDropdownComponent } from '../countries-dropdown/countries-dropdown.component';
import { TogglerComponent } from '../toggler/toggler.component';

@Component({
  imports: [InputComponent, CountriesDropdownComponent, TogglerComponent],
  selector: 'app-shipping',
  styles: ``,
  templateUrl: './shipping.component.html',
})
export class ShippingComponent {
  status = model<boolean>(false);
  weight = model.required<string>();
  country = model.required<string>();

  constructor() {
    effect(() => {
      if (this.status()) {
        this.weight.set('0');
        this.country.set('All');
      }
    });
  }
}
