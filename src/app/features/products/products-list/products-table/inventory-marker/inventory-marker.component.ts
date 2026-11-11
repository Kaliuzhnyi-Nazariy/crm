import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-inventory-marker',
  styles: ``,
  templateUrl: './inventory-marker.component.html',
})
export class InventoryMarkerComponent {
  amount = input.required<number>();
}
