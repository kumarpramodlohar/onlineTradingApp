import { Component, OnInit,Input,Output } from '@angular/core';
import { of, Subscription, timer,interval, pipe} from "rxjs";
import { catchError, filter, switchMap } from "rxjs/operators";
import { TokenStorageService } from '../_services/token-storage.service';
import { StockDataService } from '../_services/stockdata.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})


export class WatchlistComponent implements OnInit {
  @Output() data: any;
  user:any;
  symbol:any;

  
  minutes: number;
  @Input() intervalPeriod: number;
  subscription: Subscription;

  

  constructor(private stockdataservice : StockDataService,private tokenStorage : TokenStorageService) {
    this.user = this.tokenStorage.getUser();
 
   }

  ngOnInit(): void {
   
    this.subscription = timer(0, 1000)
      .pipe(
        switchMap(() => {
          return this.stockdataservice.getUserWatchList(this.user)
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

  
  viewWatchList(): any {
    return this.stockdataservice.getUserWatchList(this.user).subscribe(data =>{
      this.data = data;
      console.log(data)
    },
    err => {
      console.log("In error");
    });
  }
  

}
