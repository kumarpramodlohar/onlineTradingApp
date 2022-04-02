import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {
  private API_URL = 'http://localhost:8080/api/';
  
  
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }
  userdetails(client_code: string): Observable<any> {
   
   
  const config = {
    headers: new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    ),
  };

  return this.http.get(this.API_URL +'user/'+client_code,config);

  }



}
