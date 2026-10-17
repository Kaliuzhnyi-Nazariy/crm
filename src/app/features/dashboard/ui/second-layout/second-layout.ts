import { Component } from '@angular/core';
import { GeneralData } from './general-data/general-data';
import { AgeDistribution } from './age-distribution/age-distribution';
import { StoreFunnelComponent } from './store-funnel/store-funnel.component';
import { MostVisitedPagesComponent } from './most-visited-pages/most-visited-pages.component';
import { SocialMediaPerformanceComponent } from './social-media-performance/social-media-performance.component';

@Component({
  imports: [
    GeneralData,
    AgeDistribution,
    StoreFunnelComponent,
    MostVisitedPagesComponent,
    SocialMediaPerformanceComponent,
  ],
  selector: 'app-second-layout',
  styles: ``,
  templateUrl: './second-layout.html',
})
export class SecondLayout {}
