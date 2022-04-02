import { Component, Input, OnDestroy,  OnInit, Output} from '@angular/core';
import { StockDataService } from '../_services/stockdata.service';
import { of, Subscription, timer,interval, pipe} from "rxjs";
import { catchError, filter, switchMap } from "rxjs/operators";
import { TokenStorageService } from '../_services/token-storage.service';

import { HttpClientModule } from "@angular/common/http";

interface alerts {
  border: string;
  background: string;
  color: string;
  icon: string;
  iconColor: string;
  message: string;
}

interface desc {
  background: string,
  color: string,
  icon: string,
  iconColor: string,
  heading: string,
  title: string,
  subheading: string,
}


@Component({
  selector: 'app-topshares',
  templateUrl: './topshares.component.html',
  styleUrls: ['./topshares.component.css']

})
export class TopsharesComponent implements OnInit, OnDestroy {
  @Output() data: any;
  minutes: number;
  @Input() intervalPeriod: number;
  isLoggedIn : boolean = true;
  isSucessAlert: boolean=false;
  symbol:any;
  token:any;
  user : any;
  subscription: Subscription;
     name=[
      "ADANIPORT"
     ]
   
     
   
  constructor(private stockdataservice : StockDataService,private tokenStorage : TokenStorageService) {
   this.isLoggedIn=true;
   }

  ngOnInit(): void {
    
    this.isLoggedIn=true;
    this.token=this.tokenStorage.getToken(); 
  
    this.user = this.tokenStorage.getUser();
    
    this.subscription = timer(0, 1000)
      .pipe(
        switchMap(() => {
          return this.stockdataservice.getStockData()
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
        this.isLoggedIn=true;
        this.data = data;
        console.log(this.data);
       
      });
      
  }
  alerts: alerts[] = [
    
    {
      border: "alert-border-success",
      background: "alert-success",
      color: "alert-text-success",
      icon: "check-circle",
      iconColor: "text-success",
      message: "This is an success alert — check it out!",
    },
  ]


  desc: desc[] = [
    {
      background: "alert-danger",
      color: "alert-text-danger",
      icon: "alert-circle",
      iconColor: "text-danger",
      heading: "Error",
      title: "This is an error alert —",
      subheading: "check it out!",
    },
    {
      background: "alert-warning",
      color: "alert-text-warning",
      icon: "alert-triangle",
      iconColor: "text-warning",
      heading: "Warning",
      title: "This is an warning alert —",
      subheading: "check it out!",
    },
    {
      background: "alert-info",
      color: "alert-text-info",
      icon: "info",
      iconColor: "text-info",
      heading: "Info",
      title: "This is an info alert —",
      subheading: "check it out!",
    },
    {
      background: "alert-success",
      color: "alert-text-success",
      icon: "check-circle",
      iconColor: "text-success",
      heading: "Success",
      title: "This is an success alert —",
      subheading: "check it out!",
    },
  ]



  addToWatchlist(symbol:string): any {
    // console.log("token   "+this.token);

    this.stockdataservice.addToUserWatchList(this.user,symbol,"W1").subscribe(data=>{
      this.data = data;
      console.log(data)
      this.isSucessAlert=true;
         },
    err => {
         console.log("In error");
    });

  }

  

  ngOnChanges(){
    this.isLoggedIn = true;
  }
  ngAfterViewInit(){
    this.isLoggedIn = true;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
