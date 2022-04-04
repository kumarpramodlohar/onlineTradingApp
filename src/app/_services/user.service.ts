import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

//const API_URL = 'http://ec2-52-38-131-69.us-west-2.compute.amazonaws.com:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  private API_URL= environment.API_URL;
  
  //private API_URL_USERS = 'http://ec2-52-38-131-69.us-west-2.compute.amazonaws.com:8080/api';
  //private API_URL_USERS_deactivate = 'http://ec2-52-38-131-69.us-west-2.compute.amazonaws.com:8080/api/userDeactivate/';
  //   /fetchWallet/
  /*
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }
*/

  getUserBoard(): Observable<any> {
    return this.http.get(this.API_URL + '/api/user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(this.API_URL + '/api/mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(this.API_URL + '/api/admin', { responseType: 'text' });
  }
  getUsers(): Observable<any>{
        
    return this.http.get(this.API_URL+'/api/users/');
  }

  userDeactivate(client_id: string): Observable<any> {
    const body = { title: 'PUT Request' };  
    return this.http.put<any>(this.API_URL+'/api/userDeactivate/' + client_id,body);
    }
    
    getWallet(username: String): Observable<any>{
        
      return this.http.get(this.API_URL+'/api/fetchWallet/'+username);
    }
}
