import { Component } from '@angular/core';
import { InfoBlockComponent } from '../../../../../shared/components/info-block/info-block.component';
import { ChartComponent } from './chart/chart.component';
import { GeneralDataInfo } from '../../../../../shared/components/general-data-info/general-data-info';

@Component({
  imports: [InfoBlockComponent, ChartComponent, GeneralDataInfo],
  selector: 'app-general-data',
  styles: ``,
  templateUrl: './general-data.html',
})
export class GeneralData {
  info: {
    id: string;
    metric: string;
    value: number;
    percentageChange: number;
    chartData: number[];
    barColor: 'primary' | 'secondary' | 'accent';
  }[] = [
    {
      id: 'existing-users',
      metric: 'Existing Users',
      value: 5653,
      percentageChange: 22.45,
      chartData: [2, 3, 4, 8, 5, 4],
      barColor: 'primary',
    },
    {
      id: 'new-users',
      metric: 'New Users',
      value: 1650,
      percentageChange: 15.34,
      chartData: [2, 5, 4, 3, 7, 3],
      barColor: 'accent',
    },
    {
      id: 'unique-visits',
      metric: 'Unique Visits',
      value: 5420,
      percentageChange: -10.24,
      chartData: [2, 3, 5, 7, 4, 3],
      barColor: 'secondary',
    },
  ];
}
