import { AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { NbButtonModule, NbCardModule, NbDialogService, NbToastrModule, NbToastrService } from '@nebular/theme';
import { PaymentDialogComponent } from '../../compnent/payment-dialog/payment-dialog.component';
import * as echarts from 'echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NbButtonModule, NbToastrModule, NbCardModule, NgxEchartsDirective],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    provideEcharts(),
  ]
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('chartContainer') chart!: ElementRef;

  dialog = inject(NbDialogService);
  toast = inject(NbToastrService);
  constructor() { }

  // ...

  chartOption: EChartsOption =  {
    legend: {},
    tooltip: {},
    dataset: {
      dimensions: ['product', '2015', '2016', '2017'],
      source: [
        { product: 'Matcha Latte', 2015: 43.3, 2016: 85.8, 2017: 93.7 },
        { product: 'Milk Tea', 2015: 83.1, 2016: 73.4, 2017: 55.1 },
        { product: 'Cheese Cocoa', 2015: 86.4, 2016: 65.2, 2017: 82.5 },
        { product: 'Walnut Brownie', 2015: 72.4, 2016: 53.9, 2017: 39.1 }
      ]
    },
    xAxis: { type: 'category' },
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
  };
  openDialog() {
    this.dialog.open(PaymentDialogComponent);
  }
  showToast() {
    this.toast.success('hi', 'hello',
      {
        icon: 'checkmark-circle-outline', limit: 3
      }
    );
  }
  ngAfterViewInit(): void {
    const mychart = echarts.init(this.chart.nativeElement);
    mychart.setOption(this.chartOption);
  }

}
