import { Component, computed, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-payment-status-marker',
  styles: ``,
  templateUrl: './payment-status-marker.component.html',
})
export class PaymentStatusMarkerComponent {
  status = input.required<'Paid' | 'Pending'>();

  styles = computed(() => {
    return `capitalize px-2 py-0.5 rounded w-fit ${this.status() === 'Paid' ? 'bg-(--green-40) text-(--green-100)' : 'bg-(--general-40) text-(--general-80)'}`;
  });
}
