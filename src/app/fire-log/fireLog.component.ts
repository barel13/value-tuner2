import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexMarkers,
  ApexStroke,
  ApexXAxis,
  ApexYAxis,
  ChartComponent
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xAxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  yAxis: ApexYAxis;
  fill: ApexFill;
  stroke: ApexStroke;
  markers: ApexMarkers;
  colors: string[];
};

@Component({
  selector: 'app-fire-log',
  templateUrl: './fireLog.component.html',
  styleUrls: ['./fireLog.component.scss']
})
export class FireLogComponent implements OnInit, OnDestroy {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions1: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions>;

  constructor() {
    this.chartOptions1 = {
      series: [
        {
          name: 'series1',
          data: this.generateDayWiseTimeSeries(
            new Date('11 Feb 2017').getTime(),
            185,
            {
              min: 30,
              max: 90
            }
          )
        }
      ],
      chart: {
        id: 'chart2',
        type: 'line',
        height: 230,
        toolbar: {
          autoSelected: 'pan',
          show: false
        }
      },
      colors: ['#546E7A'],
      stroke: {
        width: 3
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        opacity: 1
      },
      markers: {
        size: 0
      },
      xAxis: {
        type: 'datetime'
      }
    };

    this.chartOptions2 = {
      series: [
        {
          name: 'series1',
          data: this.generateDayWiseTimeSeries(
            new Date('11 Feb 2017').getTime(),
            185,
            {
              min: 30,
              max: 90
            }
          )
        }
      ],
      chart: {
        id: 'chart1',
        height: 130,
        type: 'area',
        brush: {
          target: 'chart2',
          enabled: true
        },
        selection: {
          enabled: true,
          xaxis: {
            min: new Date('19 Jun 2017').getTime(),
            max: new Date('14 Aug 2017').getTime()
          }
        }
      },
      colors: ['#008FFB'],
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.91,
          opacityTo: 0.1
        }
      },
      xAxis: {
        type: 'datetime',
        tooltip: {
          enabled: false
        }
      },
      yAxis: {
        tickAmount: 2
      }
    };
  }

  public generateDayWiseTimeSeries(baseVal, count, yRange): any[] {
    let i = 0;
    const series = [];
    while (i < count) {
      const x = baseVal;
      const y =
        Math.floor(Math.random() * (yRange.max - yRange.min + 1)) + yRange.min;

      series.push([x, y]);
      baseVal += 86400000;
      i++;
    }
    return series;
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
