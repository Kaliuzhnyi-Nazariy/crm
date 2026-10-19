import { Component } from '@angular/core';
import { UserStatisticsComponent } from './user-statistics/user-statistics.component';
import { VisitsOverTimeComponent } from './visits-over-time/visits-over-time.component';
import { RecentTransactionsComponent } from './recent-transactions/recent-transactions.component';
import { DistributionByCountryComponent } from './distribution-by-country/distribution-by-country.component';

@Component({
  imports: [
    UserStatisticsComponent,
    VisitsOverTimeComponent,
    RecentTransactionsComponent,
    DistributionByCountryComponent,
  ],
  selector: 'app-forth-layout',
  styles: ``,
  templateUrl: './forth-layout.html',
})
export class ForthLayout {}
