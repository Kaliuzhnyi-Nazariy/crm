import { isPlatformBrowser } from '@angular/common';
import { Component, effect, Inject, PLATFORM_ID, signal } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { InfoBlockComponent } from '../../../../../shared/components/info-block/info-block.component';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';

type ReportMonthesRange = '6m' | '12m' | '24m';

@Component({
  imports: [ChartModule, InfoBlockComponent, FormsModule, Select],
  selector: 'app-finance-report',
  styles: ``,
  templateUrl: './finance-report.component.html',
})
export class FinanceReportComponent {
  selectedRange = signal<ReportMonthesRange>('12m');

  selectRange = (range: ReportMonthesRange) => {
    this.selectedRange.set(range);
  };

  rangeLabels = [
    { label: 'Last 6 month', value: '6m' },
    { label: 'Last 12 month', value: '12m' },
    { label: 'Last 24 month', value: '24m' },
  ];

  basicData: any;
  basicOptions: any;

  monthes: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  fullMonthNames: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  data = [
    { year: 2025, month: 'January', revenue: 23700, orders: 120 },
    { year: 2025, month: 'February', revenue: 18200, orders: 92 },
    { year: 2025, month: 'March', revenue: 12000, orders: 61 },
    { year: 2025, month: 'April', revenue: 31500, orders: 160 },
    { year: 2025, month: 'May', revenue: 24509, orders: 124 },
    { year: 2025, month: 'June', revenue: 18200, orders: 92 },
    { year: 2025, month: 'July', revenue: 25800, orders: 131 },
    { year: 2025, month: 'August', revenue: 10900, orders: 55 },
    { year: 2025, month: 'September', revenue: 13500, orders: 68 },
    { year: 2025, month: 'October', revenue: 18200, orders: 92 },
    { year: 2025, month: 'November', revenue: 10900, orders: 55 },
    { year: 2025, month: 'December', revenue: 8500, orders: 43 },
    { year: 2026, month: 'January', revenue: 25100, orders: 127 },
    { year: 2026, month: 'February', revenue: 19400, orders: 98 },
    { year: 2026, month: 'March', revenue: 13100, orders: 66 },
    { year: 2026, month: 'April', revenue: 33900, orders: 172 },
    { year: 2026, month: 'May', revenue: 26800, orders: 136 },
    { year: 2026, month: 'June', revenue: 20100, orders: 102 },
    { year: 2026, month: 'July', revenue: 28200, orders: 143 },
    { year: 2026, month: 'August', revenue: 11800, orders: 60 },
    { year: 2026, month: 'September', revenue: 14600, orders: 74 },
    { year: 2026, month: 'October', revenue: 19900, orders: 101 },
    { year: 2026, month: 'November', revenue: 12100, orders: 61 },
    { year: 2026, month: 'December', revenue: 9800, orders: 50 },
  ];

  gray = getComputedStyle(document.documentElement).getPropertyValue('--general-80') || 'gray';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    effect(() => {
      const range = this.selectedRange();

      let chartLabels: string[] = [];
      let chartDataValues: number[] = [];

      if (isPlatformBrowser(this.platformId)) {
        const today = new Date();
        const currentMonthIdx = today.getMonth();
        const currentYear = today.getFullYear();

        let monthsToCount = 12;
        if (range === '6m') monthsToCount = 6;
        if (range === '24m') monthsToCount = 24;

        for (let i = monthsToCount - 1; i >= 0; i--) {
          const targetDate = new Date(currentYear, currentMonthIdx - i, 1);
          const targetMonthNameShort = this.monthes[targetDate.getMonth()];
          const targetMonthNameFull = this.fullMonthNames[targetDate.getMonth()];
          const targetYearFull = targetDate.getFullYear();
          const targetYearShort = targetYearFull.toString().slice(-2);

          chartLabels.push(`${targetMonthNameShort} ${targetYearShort}`);

          const match = this.data.find(
            (d) => d.year === targetYearFull && d.month === targetMonthNameFull,
          );

          chartDataValues.push(match ? match.revenue : 0);
        }
      }

      this.basicData = {
        labels: chartLabels,
        datasets: [
          {
            label: 'Revenue',
            data: chartDataValues,
            backgroundColor: '#3b82f6',
            borderColor: '#3b82f6',
          },
        ],
      };

      this.basicOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
        },
        scales: {
          y: {
            beginAtZero: true,
            tricks: { color: this.gray },
            grid: {
              color: this.gray,
              display: true,
            },
            border: {
              display: false,
              dash: [1, 2],
            },
          },
          x: {
            grid: {
              color: 'transparent',
              drawBorder: false,
            },
            border: { display: false },
          },
        },
      };
    });
  }
}
