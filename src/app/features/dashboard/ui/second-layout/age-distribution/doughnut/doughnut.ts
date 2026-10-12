import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  imports: [ChartModule],
  selector: 'app-doughnut',
  styles: ``,
  templateUrl: './doughnut.html',
})
export class Doughnut implements OnInit {
  data: any;

  options: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);

    this.data = {
      labels: ['0-18 years', '18-30 years', '30-40 years', 'Other'],
      datasets: [
        {
          data: [50, 30, 10, 10],
          backgroundColor: [
            documentStyle.getPropertyValue('--primary-100'),
            documentStyle.getPropertyValue('--yellow-90'),
            documentStyle.getPropertyValue('--yellow-100'),
            documentStyle.getPropertyValue('--green-100'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--primary-80'),
            documentStyle.getPropertyValue('--yellow-80'),
            documentStyle.getPropertyValue('--yellow-50'),
            documentStyle.getPropertyValue('--green-80'),
          ],
        },
      ],
    };

    this.options = {
      cutout: '60%',
      plugins: {
        legend: { display: false },
      },
    };
  }
}
