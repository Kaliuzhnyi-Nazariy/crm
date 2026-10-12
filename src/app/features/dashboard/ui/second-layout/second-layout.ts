import { Component } from '@angular/core';
import { GeneralData } from './general-data/general-data';
import { AgeDistribution } from './age-distribution/age-distribution';
import { StoreFunnelComponent } from './store-funnel/store-funnel.component';

@Component({
  imports: [GeneralData, AgeDistribution, StoreFunnelComponent],
  selector: 'app-second-layout',
  styles: ``,
  templateUrl: './second-layout.html',
})
export class SecondLayout {}
