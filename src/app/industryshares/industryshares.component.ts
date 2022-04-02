
import { Component, Input, OnDestroy,  OnInit, Output} from '@angular/core';
import { StockDataService } from '../_services/stockdata.service';
import { of, Subscription, timer,interval, pipe} from "rxjs";
import { catchError, filter, switchMap } from "rxjs/operators";

import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: 'app-industryshares',
  templateUrl: './industryshares.component.html',
  styleUrls: ['./industryshares.component.css']
})
export class IndustrysharesComponent implements OnInit {
  @Output() data: any;
  minutes: number;
  @Input() intervalPeriod: number;
  subscription: Subscription;
     name=[
      "ADANIPORT"
     ]
     constructor(private stockdataservice : StockDataService) {
   
    }

  ngOnInit(): void {

    this.subscription = timer(0, 1000)
      .pipe(
        switchMap(() => {
          return this.stockdataservice.getIndustryData()
            .pipe(catchError(err => {
              // Handle errors
              console.error(err);
              this.subscription.unsubscribe();
              return of(undefined);
            }));
        }),
        filter(data => data !== undefined)
      )
      .subscribe(data => {
        this.data = data;
        console.log(this.data);
      });
  }

}
