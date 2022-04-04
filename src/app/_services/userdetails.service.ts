import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {
  //private API_URL = 'http://ec2-52-38-131-69.us-west-2.compute.amazonaws.com:8080/api/';
  private API_URL= environment.API_URL;
  
  
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

  return this.http.get(this.API_URL +'/api/user/'+client_code,config);

  }



}
