import { Component, signal } from '@angular/core';
import { InfoBlockComponent } from '../../../../../shared/components/info-block/info-block.component';
import { DataChartComponent } from './data-chart/data-chart.component';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [InfoBlockComponent, DataChartComponent, SelectModule, FormsModule],
  selector: 'app-orders-over-time',
  styles: ``,
  templateUrl: './orders-over-time.component.html',
})
export class OrdersOverTimeComponent {
  // timeMode: '12h' | '24h' = '12h';

  timeMode: '12h' | '24h' = '12h';

  formats = [
    { label: 'Last 12 Hours', value: '12h' },
    { label: 'Last 24 Hours', value: '24h' },
  ];

  selectFormat = (format: '12h' | '24h') => {
    this.timeMode = format;
  };
}
