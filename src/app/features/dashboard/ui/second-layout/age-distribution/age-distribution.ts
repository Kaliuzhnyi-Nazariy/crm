import { afterNextRender, Component, computed, OnInit, signal } from '@angular/core';
import { Doughnut } from './doughnut/doughnut';
import { InfoBlockComponent } from '../../../../../shared/components/info-block/info-block.component';

@Component({
  imports: [Doughnut, InfoBlockComponent],
  selector: 'app-age-distribution',
  styles: ``,
  templateUrl: './age-distribution.html',
})
export class AgeDistribution {
  themeColor = signal({
    primary: 'blue',
    yellow: 'yellow',
    orange: 'orange',
    green: 'green',
  });

  constructor() {
    afterNextRender(() => {
      const styles = getComputedStyle(document.documentElement);

      this.themeColor.set({
        primary: styles.getPropertyValue('--primary-100').trim() || 'blue',
        yellow: styles.getPropertyValue('--yellow-90').trim() || 'yellow',
        orange: styles.getPropertyValue('--yellow-100').trim() || 'orange',
        green: styles.getPropertyValue('--green-100').trim() || 'green',
      });
    });
  }

  ageStats = computed(() => {
    const colors = this.themeColor();

    return [
      { age: '0-18', percentage: 50, color: colors.primary },
      { age: '18-30', percentage: 30, color: colors.yellow },
      { age: '30-40', percentage: 10, color: colors.orange },
      { age: 'Others', percentage: 10, color: colors.green },
    ];
  });
}
