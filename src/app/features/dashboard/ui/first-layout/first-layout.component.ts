import { Component } from '@angular/core';
import { OrdersOverTimeComponent } from './orders-over-time/orders-over-time.component';
import { LastDaysSalesComponent } from './last-days-sales/last-days-sales.component';
import { GeneralDataComponent } from './general-data/general-data.component';
import { RecentTransactionsComponent } from './recent-transactions/recent-transactions.component';
import { TopProductsComponent } from './top-products/top-products.component';

@Component({
  // imports: [LastDaysSalesComponent],
  imports: [
    GeneralDataComponent,
    OrdersOverTimeComponent,
    LastDaysSalesComponent,
    RecentTransactionsComponent,
    TopProductsComponent,
  ],
  selector: 'app-first-layout',
  styles: ``,
  host: {
    class: 'flex flex-col flex-1 min-h-0 w-full',
  },
  templateUrl: './first-layout.component.html',
})
export class FirstLayoutComponent {}
