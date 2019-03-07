import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('labels') barChartLabels: string[] = [];
  // tslint:disable-next-line:no-input-rename
  @Input('datasets') barChartData: number[] = [];
  // tslint:disable-next-line:no-input-rename 
  @Input('chartType') barChartType: string = '';

  constructor() { }

  ngOnInit() {
  }

}
