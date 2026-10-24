import { Component, computed, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-order-status-marker',
  styles: ``,
  templateUrl: './order-status-marker.component.html',
})
export class OrderStatusMarkerComponent {
  status = input.required<'Ready' | 'Shipped' | 'Received'>();

  styles = computed(() => {
    const basicStyles = 'capitalize px-2 py-0.5 rounded w-fit text-white ';

    if (this.status() === 'Ready') {
      return basicStyles + 'bg-(--yellow-100)';
    } else if (this.status() === 'Received') {
      return basicStyles + 'bg-(--primary-100)';
    } else {
      return basicStyles + 'bg-(--general-80)';
    }

    // return ` ${this.status() === 'Paid' ? 'bg-(--green-40) text-(--green-100)' : 'bg-(--general-40) text-(--general-80)'}`;
  });
}
