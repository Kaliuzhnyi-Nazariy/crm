import { Component } from '@angular/core';
import { TransactionLayoutComponent } from '../../../../../shared/components/transaction-layout/transaction-layout.component';
import { TransactionsItem } from '../../../../../../types';

@Component({
  imports: [TransactionLayoutComponent],
  selector: 'app-collections-sold',
  styles: ``,
  templateUrl: './collections-sold.component.html',
})
export class CollectionsSoldComponent {
  data: TransactionsItem[] = [
    { title: 'Men', percentage: 10 },
    { title: 'Women', percentage: 8 },
    { title: 'Kids', percentage: 7 },
  ];
}
