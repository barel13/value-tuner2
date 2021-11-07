import {Component, OnDestroy, OnInit} from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexMarkers,
  ApexStroke,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis
} from 'ng-apexcharts';
import {FireLogService} from '../fire-log-service/fire-log.service';

export type ChartOptions = {
  series?: ApexAxisChartSeries;
  chart?: ApexChart;
  xaxis?: ApexXAxis;
  dataLabels?: ApexDataLabels;
  yaxis?: ApexYAxis;
  fill?: ApexFill;
  markers?: ApexMarkers;
  tooltip?: ApexTooltip;
  stroke?: ApexStroke;
  colors?: string[];
};

@Component({
  selector: 'app-fire-log',
  templateUrl: './fireLog.component.html',
  styleUrls: ['./fireLog.component.scss']
})
export class FireLogComponent implements OnInit, OnDestroy {
  public options: Partial<ChartOptions>;

  constructor(private service: FireLogService) {
    const body = document.body;
    const html = document.documentElement;
    const height = 0.96 * Math.max(body.scrollHeight, body.offsetHeight,
      html.clientHeight, html.scrollHeight, html.offsetHeight);

    this.options = {
      chart: {
        id: 'chart2',
        type: 'area',
        stacked: false,
        width: '99%',
        height,
        zoom: {
          type: 'x',
          enabled: true,
          autoScaleYaxis: true
        },
        toolbar: {
          autoSelected: 'zoom',
          show: true
        }
      },
      series: service.values,
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0
        }
      },
      tooltip: {
        enabled: true,
        shared: false,
        followCursor: true,
        x: {
          formatter(val: number): string {
            const time = new Date(val);
            return time.getMinutes() + ':' + time.getSeconds();
          }
        }
      },
      markers: {
        size: 0
      },
      xaxis: {
        type: 'datetime',
        labels: {
          formatter(value: string): string | string[] {
            const time = new Date(value);
            return time.getMinutes() + ':' + time.getSeconds();
          }
        }
      },
      yaxis: {
        labels: {
          formatter(val: number): string | string[] {
            return val.toString();
          }
        }
      }
    };
  }

  ngOnInit(): void {
    this.service.connect();
  }

  ngOnDestroy(): void {
    this.service.disconnect();
  }
}
