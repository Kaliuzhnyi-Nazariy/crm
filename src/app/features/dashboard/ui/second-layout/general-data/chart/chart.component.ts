import { isPlatformBrowser } from '@angular/common';
import { Component, computed, effect, Inject, input, PLATFORM_ID } from '@angular/core';
import { ChartType, TooltipItem } from 'chart.js';
import { ChartModule } from 'primeng/chart';

@Component({
  imports: [ChartModule],
  selector: 'app-chart',
  styles: ``,
  templateUrl: './chart.component.html',
})
export class ChartComponent {
  data = input<number[]>([]);
  color = input<'primary' | 'secondary' | 'accent'>('primary');

  tooltipMessage = input<string>('');

  basicOptions: any;
  basicData: any;
  generalColor = 'gray';
  priamaryColor = 'blue';
  accentColor = 'yellow';
  secondaryColor = 'green';
  tooltipColor = 'black';

  styleColor = computed(() => {
    if (this.color() === 'primary') {
      return this.priamaryColor;
    } else if (this.color() === 'secondary') {
      return this.secondaryColor;
    } else {
      return this.accentColor;
    }
  });

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        this.generalColor = getComputedStyle(document.documentElement)
          .getPropertyValue('--general-60')
          .trim();
        this.priamaryColor = getComputedStyle(document.documentElement)
          .getPropertyValue('--primary-60')
          .trim();
        this.accentColor = getComputedStyle(document.documentElement)
          .getPropertyValue('--yellow-60')
          .trim();
        this.secondaryColor = getComputedStyle(document.documentElement)
          .getPropertyValue('--green-60')
          .trim();
        this.tooltipColor = getComputedStyle(document.documentElement)
          .getPropertyValue('--general-90')
          .trim();

        this.basicData = {
          labels: ['1', '2', '3', '4', '5', '6'],
          datasets: [
            {
              label: 'First Dataset',
              data: this.data(),
              fill: false,
              borderColor: this.generalColor,
              tension: 0.4,

              barThickness: 21,
              borderRadius: 4,
              borderSkipped: 'none',

              backgroundColor: this.styleColor,
            },
          ],
        };

        this.basicOptions = computed(() => {
          const message = this.tooltipMessage();

          const hasMessage = !!message && message.length > 0;

          return {
            plugins: {
              colors: { enabled: false },
              legend: { display: false },
              tooltip: {
                enabled: hasMessage,
                displayColors: false,

                backgroundColor: this.tooltipColor,
                padding: 12,

                callbacks: {
                  title: (context: TooltipItem<ChartType>[]) => {
                    const firstItem = context[0];
                    return `${firstItem.formattedValue} ${message}`;
                  },
                  label: () => '',
                },
                bodySpacing: 0,
                titleMarginBottom: 0,
              },
            },
            scales: {
              y: { display: false },
              x: {
                display: false,
              },
            },
          };
        });
      }
    });
  }
}
