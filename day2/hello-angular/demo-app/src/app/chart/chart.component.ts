import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',

  template: `
  <kendo-chart>
  <kendo-chart-series>
    <kendo-chart-series-item type="scatterLine" [data]="seriesData.one">
    </kendo-chart-series-item>
    <kendo-chart-series-item type="scatterLine" [data]="seriesData.two">
    </kendo-chart-series-item>
  </kendo-chart-series>
</kendo-chart>
    `
  ,
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  private seriesData:any;
  constructor() { }

  ngOnInit() {
    this.seriesData= {
      one: [[10, 10], [15, 20], [20, 25], [32, 40], [43, 50], [55, 60], [60, 70], [70, 80], [90, 100]],
      two: [[10, 40], [17, 50], [18, 70], [35, 90], [47, 95], [60, 100]]
  };
  }

}
