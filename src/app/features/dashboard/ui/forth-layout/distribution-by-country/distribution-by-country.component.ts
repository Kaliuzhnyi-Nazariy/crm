import { Component } from '@angular/core';
import { InfoBlockComponent } from '../../../../../shared/components/info-block/info-block.component';

@Component({
  imports: [InfoBlockComponent],
  selector: 'app-distribution-by-country',
  styles: ``,
  templateUrl: './distribution-by-country.component.html',
})
export class DistributionByCountryComponent {
  stats = [
    { country: 'United States', percentage: 55 },
    { country: 'Canada', percentage: 20 },
    { country: 'Poland', percentage: 15 },
    { country: 'Belgium', percentage: 6 },
    { country: 'Ukraine', percentage: 4 },
  ];
}
