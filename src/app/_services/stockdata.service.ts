import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders  } from "@angular/common/http";
import { Observable,interval } from "rxjs";



@Injectable({
    providedIn :'root'
})

export class StockDataService{
private API_URL ="http://localhost:8080/live/market-feed";
private INDUSTRY_URL = "http://localhost:8080/live/industry-feed";
private STOCK_NAME_URL = "http://localhost:8080/live/stockName";

private USER_WATCHLIST_ADD = "http://localhost:8080/api";

private LIVE_URL = "http://localhost:8080/live/";

private httpOptions = {
    //headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
    
//client.getMarketFeed(a).then((response) => {
    //console.log(response)
//}).catch((err) => {
  //  console.log(err)
//}); 

    constructor(private http:HttpClient){

    }

    getStockData(): Observable<any>{
        
        return this.http.get(this.API_URL);
        
    }

    getIndustryData(): Observable<any>{
        
        return this.http.get(this.INDUSTRY_URL);
        
    }

    getStockNameData() : Observable<any>{
        return this.http.get(this.STOCK_NAME_URL);
    }

    addToUserWatchList(username : any, symbol : string,watch_flag : string ): Observable<any>{
       

          const bodyReq = {
            "symbol": symbol,
            "username":username,
            "watch_flag": watch_flag
             
        }

        console.log(bodyReq);
   
        const config = {
            headers: new HttpHeaders()
            .set(
              'Content-Type',
              'application/JSON'
            )
            .set('content-type', 'application/json')
            .set('Access-Control-Allow-Origin', '*')
      
          };
            
            console.log(config);

          return this.http.post(this.USER_WATCHLIST_ADD +'/addWatchlist', JSON.stringify(bodyReq),config);
          
    }

    getUserWatchList(username:String) : Observable<any>{
      console.log("in View watchList");
      const config = {
        headers: new HttpHeaders()
        .set(
          'Content-Type',
          'application/JSON'
        )
        .set('content-type', 'application/json')
        .set('Access-Control-Allow-Origin', '*')
  
      };

        return this.http.get(this.USER_WATCHLIST_ADD+'/getWatchlist/'+username,config);
    }

}