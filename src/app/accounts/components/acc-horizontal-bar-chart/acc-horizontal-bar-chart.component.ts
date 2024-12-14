import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-acc-horizontal-bar-chart',
  standalone: true,
  imports: [ChartModule],
  template: `<p-chart type="bar" [data]="data" [options]="options"></p-chart>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccHorizontalBarChartComponent implements OnInit {
  data!: ChartData;
  options!: ChartOptions;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);

    this.data = {
      labels: ['bKash', 'Trust Bank', 'DPS', 'Cash'],
      datasets: [
        {
          data: [10, 70, 15, 5],
          backgroundColor: [
            documentStyle.getPropertyValue('--p-  blue-500'),
            documentStyle.getPropertyValue('--p-  yellow-500'),
            documentStyle.getPropertyValue('--p-  green-500'),
            documentStyle.getPropertyValue('--p-  orange-500'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--p-blue-400'),
            documentStyle.getPropertyValue('--p-yellow-400'),
            documentStyle.getPropertyValue('--p-green-400'),
            documentStyle.getPropertyValue('--p-orange-400'),
          ],
        },
      ],
    };

    this.options = {
      indexAxis: 'y',
      maintainAspectRatio: true,
      scales: {
        x: {
          grid: {
            offset: true,
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    };
  }
}
