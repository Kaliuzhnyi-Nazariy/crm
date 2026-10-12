import { isPlatformBrowser } from '@angular/common';
import { Component, computed, effect, Inject, input, PLATFORM_ID } from '@angular/core';
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

  basicOptions: any;
  basicData: any;
  generalColor = 'gray';
  priamaryColor = 'blue';
  accentColor = 'yellow';
  secondaryColor = 'green';

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

        this.basicOptions = {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            colors: { enabled: false },
            legend: { display: false },
            // tooltip: {
            //   position: 'nearest',
            //   // yAlign: 'bottom',
            //   backgroundColor: this.tooltipColor,
            //   displayColors: false,
            //   titleAlign: 'center',
            //   bodyAlign: 'center',

            //   padding: 12,
            //   cornerRadius: 4,

            //   titleFont: {
            //     // family: 'Inter',
            //     weight: 700,
            //     size: 12,
            //     // lineHeight: 1.5,
            //   },

            //   bodyFont: {
            //     weight: 400,
            //     size: 12,
            //     // lineHeight: 1.5,
            //   },

            //   callbacks: {
            //     title: (tooltipItems: any) => {
            //       const item = tooltipItems[0];

            //       return `${item.formattedValue} orders`;
            //     },

            //     label: (context: any) => {
            //       const formattedTime = context.label.replace(/(am|pm)/i, ' \$1').toUpperCase();
            //       return `May 22, ${formattedTime}`;
            //     },
            //   },
            // },
          },
          scales: {
            y: {
              display: false,
            },
            x: {
              display: false,
            },
          },
        };
      }
    });
  }
}
