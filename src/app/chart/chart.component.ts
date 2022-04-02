import { Component, OnInit } from '@angular/core';
import { StockDataService } from '../stock-data.service';
import { HistoricalData } from '../model/staticData';
import { Observable} from 'rxjs';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor(private stockDataService: StockDataService) {
    this.single = this.stockDataService.getStaticData();

     }

  ngOnInit(): void {
   
    //this.stockDataService.getMarketFeed();
 
  }

  historicalData: Observable<HistoricalData[]> = this.stockDataService.historicalData;
  
  single: any[];
  multi: any[];

  view: any[] = [800, 360];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Time';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };



  public onSelect(event): void {

  }

  public onRefresh(): void {
    
  }

}
