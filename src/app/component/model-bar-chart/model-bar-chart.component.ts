import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexGrid, ApexStroke, ApexTitleSubtitle, ApexXAxis, ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'app-model-bar-chart',
  templateUrl: './model-bar-chart.component.html',
  styleUrls: ['./model-bar-chart.component.scss']
})
export class ModelBarChartComponent implements OnInit,OnChanges {
  @Input('data') chartData: any;
  @ViewChild('chart')
  chart!: ChartComponent;

  chartEnabled : boolean = false;

  public chartOptions: Partial<ChartOptions> | any;

  constructor() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.chartData)
    this.setChartData();
  }
  ngOnInit(): void {
    console.log(this.chartData)

  }


  setChartData() {
    this.chartOptions = {
      series: [
        {
          name: this.chartData.name ,
          data: this.chartData.series
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: this.chartData.timeLine,
        labels : {
          show : false,
        },
        title :{
          text : "Cycle"
        }
      },
    };

    this.chartEnabled = true;
  }
}

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
};
