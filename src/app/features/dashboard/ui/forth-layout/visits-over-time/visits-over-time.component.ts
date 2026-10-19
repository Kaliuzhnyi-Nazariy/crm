import { Component, Inject, OnInit, PLATFORM_ID, signal, effect } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { InfoBlockComponent } from '../../../../../shared/components/info-block/info-block.component';
import { isPlatformBrowser } from '@angular/common';
import { Select } from 'primeng/select';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [ChartModule, InfoBlockComponent, Select, FormsModule],
  selector: 'app-visits-over-time',
  styles: ``,
  styleUrl: '../../../../../../styles.css',
  templateUrl: './visits-over-time.component.html',
})
export class VisitsOverTimeComponent implements OnInit {
  timeMode = signal<'12h' | '24h'>('12h');

  formats = [
    { label: 'Last 12 Hours', value: '12h' },
    { label: 'Last 24 Hours', value: '24h' },
  ];

  selectFormat = (format: '12h' | '24h') => {
    this.timeMode.set(format);
  };

  generalColor: string = 'gray';
  tooltipColor: string = 'darkgray';
  primaryColor: string = '#1e5eff';
  secondColor: string = 'green';
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

  private masterDatasetFirst: number[] = [];
  private masterDatasetSecond: number[] = [];

  data: any;
  options: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    effect(() => {
      const mode = this.timeMode();
      if (this.masterDatasetFirst.length > 0) {
        this.updateChartStructure(mode);
      }
    });
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.generalColor =
        getComputedStyle(document.documentElement).getPropertyValue('--general-60').trim() ||
        'gray';
      this.primaryColor =
        getComputedStyle(document.documentElement).getPropertyValue('--primary-100').trim() ||
        '#1e5eff';
      this.tooltipColor =
        getComputedStyle(document.documentElement).getPropertyValue('--general-90').trim() ||
        'darkgray';
      this.secondColor =
        getComputedStyle(document.documentElement).getPropertyValue('--green-90') || 'green';

      this.currentTime = new Date()
        .toLocaleTimeString('en-US', { hour: 'numeric', hour12: true })
        .toLowerCase()
        .replace(/\s+/g, '');

      this.masterDatasetFirst = this.hours.map(
        () => Math.floor(Math.random() * (2500 - 1000 + 1)) + 40,
      );
      this.masterDatasetSecond = this.hours.map(
        () => Math.floor(Math.random() * (800 - 250 + 1)) + 15,
      );

      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          colors: { enabled: false },
          legend: { display: false },
          tooltip: {
            position: 'nearest',
            backgroundColor: this.tooltipColor,
            displayColors: false,
            titleAlign: 'center',
            bodyAlign: 'center',
            padding: 12,
            cornerRadius: 4,
            titleFont: { weight: 700, size: 12 },
            bodyFont: { weight: 400, size: 12 },
            callbacks: {
              title: (tooltipItems: any) => `${tooltipItems[0].formattedValue} visits`,
              label: (context: any) =>
                `May 22, ${context.label.replace(/(am|pm)/i, ' \$1').toUpperCase()}`,
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { color: this.generalColor, stepSize: 500 },
            grid: { color: 'transparent', drawBorder: false },
          },
          x: {
            ticks: { color: this.generalColor },
            grid: { color: 'transparent', drawBorder: false },
          },
        },
      };

      this.updateChartStructure(this.timeMode());
    }
  }

  private updateChartStructure(mode: '12h' | '24h') {
    let labelTime: string[] = [];
    let dataFirst: number[] = [];
    let dataSecond: number[] = [];

    const currentIndex = this.hours.indexOf(this.currentTime);

    if (mode === '12h' && currentIndex !== -1) {
      for (let i = 11; i >= 0; i--) {
        const targetIndex = (currentIndex - i + 24) % 24;
        labelTime.push(this.hours[targetIndex]);
        dataFirst.push(this.masterDatasetFirst[targetIndex]);
        dataSecond.push(this.masterDatasetSecond[targetIndex]);
      }
    } else {
      for (let i = 23; i >= 0; i--) {
        const targetIndex = (currentIndex - i + 24) % 24;
        labelTime.push(this.hours[targetIndex]);
        dataFirst.push(this.masterDatasetFirst[targetIndex]);
        dataSecond.push(this.masterDatasetSecond[targetIndex]);
      }
    }

    this.data = {
      labels: labelTime,
      datasets: [
        {
          label: 'First Dataset',
          data: dataFirst,
          fill: false,
          borderColor: this.secondColor,
          tension: 0.4,
        },
        {
          label: 'Second Dataset',
          data: dataSecond,
          fill: false,
          borderColor: this.primaryColor,
          tension: 0.4,
        },
      ],
    };
  }
}
