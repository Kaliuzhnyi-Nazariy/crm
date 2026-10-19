import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  imports: [ChartModule],
  selector: 'app-statistics',
  styles: ``,
  templateUrl: './statistics.html',
})
export class Statistics {
  blue = getComputedStyle(document.documentElement).getPropertyValue('--primary-100') || 'blue';
  gray = getComputedStyle(document.documentElement).getPropertyValue('--general-60') || 'lightdray';
  black = getComputedStyle(document.documentElement).getPropertyValue('--general-100') || 'black';

  basicData = {
    labels: ['Visited Site', 'Added to Cart', 'Proceed to Checkout', 'Made a Purchase'],
    datasets: [
      {
        label: '',
        data: [420, 305, 230, 160],
        backgroundColor: this.blue,
        // borderColor: [
        //   'rgb(255, 159, 64)',
        //   'rgb(75, 192, 192)',
        //   'rgb(54, 162, 235)',
        //   'rgb(153, 102, 255)',
        // ],
        // borderWidth: 1,
        barThickness: 60,
        borderRadius: 4,
        borderSkipped: 'none',
      },
    ],
  };

  basicOptions = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        displayColors: false,
        enabled: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: this.gray,
          stepSize: 100,
        },
        grid: {
          color: this.gray,
          display: true,
          drawTicks: false,
        },
        border: {
          display: false,
          dash: [2, 2],
        },
      },

      x: {
        ticks: {
          color: this.black,
        },
        grid: {
          color: 'transparent',
          drawBorder: false,
        },
      },
    },
  };
}
