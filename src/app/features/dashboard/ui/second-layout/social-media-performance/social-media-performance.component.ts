import { Component } from '@angular/core';
import { InfoBlockComponent } from '../../../../../shared/components/info-block/info-block.component';

@Component({
  imports: [InfoBlockComponent],
  selector: 'app-social-media-performance',
  styles: ``,
  templateUrl: './social-media-performance.component.html',
})
export class SocialMediaPerformanceComponent {
  socialMediaPerformance = [
    { socialMedia: 'Facebook', visits: 8402 },
    { socialMedia: 'Instagram', visits: 7420 },
    { socialMedia: 'X', visits: 6324 },
    { socialMedia: 'Linkedin', visits: 4126 },
    { socialMedia: 'Pinterest', visits: 2080 },
  ];

  get graphCeiling(): number {
    const maxVisits = Math.max(...this.socialMediaPerformance.map((s) => s.visits));

    const step = 5000;

    return Math.ceil(maxVisits / step) * step;
  }
}
