import { Component } from '@angular/core';
import { FinanceReportComponent } from './finance-report/finance-report.component';
import { UserStatisticsComponent } from './user-statistics/user-statistics.component';
import { TopSalesmanComponent } from './top-salesman/top-salesman.component';
import { CollectionsSoldComponent } from './collections-sold/collections-sold.component';
import { ReturnedItemsComponent } from './returned-items/returned-items.component';

@Component({
  imports: [
    FinanceReportComponent,
    UserStatisticsComponent,
    TopSalesmanComponent,
    CollectionsSoldComponent,
    ReturnedItemsComponent,
  ],
  selector: 'app-third-layout',
  styles: ``,
  templateUrl: './third-layout.html',
})
export class ThirdLayout {}
