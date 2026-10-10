import { Component } from '@angular/core';
import { InfoBlockComponent } from '../../../../../shared/components/info-block/info-block.component';
import { DataTable } from './data-table/data-table';

@Component({
  imports: [InfoBlockComponent, DataTable],
  selector: 'app-recent-transactions',
  styles: ``,
  templateUrl: './recent-transactions.component.html',
})
export class RecentTransactionsComponent {}
