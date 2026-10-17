import { Component } from '@angular/core';
import { TransactionLayoutComponent } from '../../../../../shared/components/transaction-layout/transaction-layout.component';
import { TransactionsItem } from '../../../../../../types';

@Component({
  imports: [TransactionLayoutComponent],
  selector: 'app-returned-items',
  styles: ``,
  templateUrl: './returned-items.component.html',
})
export class ReturnedItemsComponent {
  data: TransactionsItem[] = [
    { title: 'This month', percentage: 38 },
    { title: 'Last month', percentage: 12 },
    { title: 'All time', percentage: 50 },
  ];

  value = 50;
}
