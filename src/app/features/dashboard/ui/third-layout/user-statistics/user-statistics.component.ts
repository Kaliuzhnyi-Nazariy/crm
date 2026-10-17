import { Component } from '@angular/core';
import { InfoBlockComponent } from '../../../../../shared/components/info-block/info-block.component';
import { GeneralDataInfo } from '../../../../../shared/components/general-data-info/general-data-info';

@Component({
  imports: [InfoBlockComponent, GeneralDataInfo],
  selector: 'app-user-statistics',
  styles: ``,
  styleUrl: './user-statistics.component.css',
  templateUrl: './user-statistics.component.html',
})
export class UserStatisticsComponent {
  statistics = [
    { label: 'Existing Users', value: 5653, percentage: 22.45 },
    { label: 'New Users', value: 1650, percentage: 15.34 },
    { label: 'Total Visits', value: 9504, percentage: -18.52 },
    { label: 'Unique Visits', value: 5423, percentage: -10.24 },
  ];
}
