import { Component } from '@angular/core';
import { InfoBlockComponent } from '../../../../../shared/components/info-block/info-block.component';
import { SalesChart } from './sales-chart/sales-chart';

@Component({
  imports: [InfoBlockComponent, SalesChart],
  selector: 'app-last-days-sales',
  styles: ``,
  templateUrl: './last-days-sales.component.html',
})
export class LastDaysSalesComponent {
  itemsSold = 1259;
  revenue = 12546;
}
