import { Component } from '@angular/core';
import { InfoBlockComponent } from '../../../../../shared/components/info-block/info-block.component';

@Component({
  imports: [InfoBlockComponent],
  selector: 'app-most-visited-pages',
  styles: ``,
  templateUrl: './most-visited-pages.component.html',
})
export class MostVisitedPagesComponent {
  visitStatistics = [
    { link: '/home/', visits: 8402, uniqueVisits: 4230 },
    { link: '/store/main/', visits: 8210, uniqueVisits: 4123 },
    { link: '/store/women-clothes/', visits: 7500, uniqueVisits: 3612 },
    { link: '/store/men-clothes/', visits: 6420, uniqueVisits: 2425 },
    { link: '/store/accessories/', visits: 523, uniqueVisits: 1864 },
  ];
}
