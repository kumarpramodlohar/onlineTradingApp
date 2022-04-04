import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders  } from "@angular/common/http";
import { Observable,interval } from "rxjs";
import { environment } from '../../environments/environment';



@Injectable({
    providedIn :'root'
})

export class StockDataService{

private API_URL =environment.API_URL;
//"http://ec2-52-38-131-69.us-west-2.compute.amazonaws.com:8080/live/market-feed";
//private INDUSTRY_URL = "http://ec2-52-38-131-69.us-west-2.compute.amazonaws.com:8080/live/industry-feed";
//private STOCK_NAME_URL = "http://ec2-52-38-131-69.us-west-2.compute.amazonaws.com:8080/live/stockName";

//private USER_WATCHLIST_ADD = "http://ec2-52-38-131-69.us-west-2.compute.amazonaws.com:8080/api";

//private LIVE_URL = "http://ec2-52-38-131-69.us-west-2.compute.amazonaws.com:8080/live/";

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
        
        return this.http.get(this.API_URL+'/live/market-feed');
        
    }

    getIndustryData(): Observable<any>{
        
        return this.http.get(this.API_URL+'/live/industry-feed');
        
    }

    getStockNameData() : Observable<any>{
        return this.http.get(this.API_URL+'/live/stockName');
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

          return this.http.post(this.API_URL +'/api/addWatchlist', JSON.stringify(bodyReq),config);
          
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

        return this.http.get(this.API_URL+'/api/getWatchlist/'+username,config);
    }

}