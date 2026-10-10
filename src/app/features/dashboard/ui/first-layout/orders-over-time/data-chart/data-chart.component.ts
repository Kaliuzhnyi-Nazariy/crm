import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, input, effect, PLATFORM_ID } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  imports: [ChartModule],
  selector: 'app-data-chart',
  styles: ``,
  templateUrl: './data-chart.component.html',
})
export class DataChartComponent {
  timeMode = input<'12h' | '24h'>('12h');

  generalColor: string = 'gray';
  tooltipColor: string = 'darkgray';
  primaryColor: string = '#1e5eff';
  currentTime: string = '';

  hours: string[] = [
    '12am',
    '1am',
    '2am',
    '3am',
    '4am',
    '5am',
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm',
    '8pm',
    '9pm',
    '10pm',
    '11pm',
  ];

  basicData: any;
  basicOptions: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        this.generalColor = getComputedStyle(document.documentElement)
          .getPropertyValue('--general-60')
          .trim();
        this.primaryColor = getComputedStyle(document.documentElement)
          .getPropertyValue('--primary-100')
          .trim();
        this.tooltipColor = getComputedStyle(document.documentElement)
          .getPropertyValue('--general-90')
          .trim();

        this.currentTime = new Date()
          .toLocaleTimeString('en-US', {
            hour: 'numeric',
            hour12: true,
          })
          .toLowerCase()
          .replace(/\s+/g, '');

        let labelTime: string[] = [];

        if (this.timeMode() === '12h') {
          const currentIndex = this.hours.indexOf(this.currentTime);

          if (currentIndex !== -1) {
            for (let i = 11; i >= 0; i--) {
              const targetIndex = (currentIndex - i + 24) % 24;
              labelTime.push(this.hours[targetIndex]);
            }
          } else {
            labelTime = this.hours;
          }
        } else {
          labelTime = this.hours;
        }

        const mockedDataFirstDataset = labelTime.map(
          () => Math.floor(Math.random() * (90 - 40 + 1)) + 40,
        );
        const mockedDataSecondDataset = labelTime.map(
          () => Math.floor(Math.random() * (50 - 15 + 1)) + 15,
        );

        this.basicData = {
          labels: labelTime,
          datasets: [
            {
              label: 'First Dataset',
              data: mockedDataFirstDataset,
              fill: false,
              borderColor: this.primaryColor,
              tension: 0.4,
            },
            {
              label: 'Second Dataset',
              data: mockedDataSecondDataset,
              fill: false,
              borderColor: this.generalColor,
              tension: 0.4,
            },
          ],
        };

        this.basicOptions = {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            colors: { enabled: false },
            legend: { display: false },
            tooltip: {
              position: 'nearest',
              // yAlign: 'bottom',
              backgroundColor: this.tooltipColor,
              displayColors: false,
              titleAlign: 'center',
              bodyAlign: 'center',

              padding: 12,
              cornerRadius: 4,

              titleFont: {
                // family: 'Inter',
                weight: 700,
                size: 12,
                // lineHeight: 1.5,
              },

              bodyFont: {
                weight: 400,
                size: 12,
                // lineHeight: 1.5,
              },

              callbacks: {
                title: (tooltipItems: any) => {
                  const item = tooltipItems[0];

                  return `${item.formattedValue} orders`;
                },

                label: (context: any) => {
                  const formattedTime = context.label.replace(/(am|pm)/i, ' \$1').toUpperCase();
                  return `May 22, ${formattedTime}`;
                },
              },
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: { color: this.generalColor },
              grid: { color: 'transparent', drawBorder: false },
            },
            x: {
              ticks: { color: this.generalColor },
              grid: { color: 'transparent', drawBorder: false },
            },
          },
        };
      }
    });
  }
}
