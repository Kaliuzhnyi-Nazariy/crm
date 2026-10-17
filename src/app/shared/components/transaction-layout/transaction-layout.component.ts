import { Component, input } from '@angular/core';
import { TransactionsItem } from '../../../../types';

@Component({
  imports: [],
  selector: 'app-transaction-layout',
  styles: ``,
  styleUrl: '../../../../styles.css',
  standalone: true,
  templateUrl: './transaction-layout.component.html',
})
export class TransactionLayoutComponent {
  title = input<string>();

  value = input<number>(25);

  data = input<TransactionsItem[]>([]);
}
