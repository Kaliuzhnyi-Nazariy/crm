import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ChartType, TooltipItem } from 'chart.js';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-sales-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './sales-chart.html',
  styles: ``,
})
export class SalesChart implements OnInit {
  private platformId = inject(PLATFORM_ID);

  basicData: any;
  basicOptions: any;

  generalColor = 'gray';
  greenColor = 'green';
  tooltipColor = 'black';

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.generalColor =
        getComputedStyle(document.documentElement).getPropertyValue('--general-60').trim() ||
        'gray';
      this.greenColor =
        getComputedStyle(document.documentElement).getPropertyValue('--green-90').trim() || 'green';
      this.tooltipColor =
        getComputedStyle(document.documentElement).getPropertyValue('--general-90').trim() ||
        'black';
    }

    this.basicData = {
      labels: ['11', '12', '13', '14', '15', '16', '17'],
      datasets: [
        {
          label: '',
          data: [12450, 14210, 13980, 15640, 18120, 17890, 15530.54],
          backgroundColor: this.greenColor,
          barThickness: 8,
          borderRadius: 4,
          borderSkipped: 'none',
        },
      ],
    };

    this.basicOptions = {
      plugins: {
        colors: { enabled: false },
        legend: { display: false },
        tooltip: {
          callbacks: {
            title: (context: TooltipItem<ChartType>[]) => {
              const firstItem = context[0];

              return `$${firstItem.formattedValue}`;
            },
          },
        },
      },
      scales: {
        y: {
          display: false,
        },
        x: {
          ticks: {
            color: this.generalColor,
          },
          grid: {
            color: 'transparent',
            drawBorder: false,
          },
        },
      },
    };
  }
}
