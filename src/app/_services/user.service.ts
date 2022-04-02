import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  private API_URL_USERS = 'http://localhost:8080/api';
  private API_URL_USERS_deactivate = 'http://localhost:8080/api/userDeactivate/';
  //   /fetchWallet/
  /*
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }
*/

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
  getUsers(): Observable<any>{
        
    return this.http.get(this.API_URL_USERS+'/users/');
  }

  userDeactivate(client_id: string): Observable<any> {
    const body = { title: 'PUT Request' };  
    return this.http.put<any>(this.API_URL_USERS_deactivate + client_id,body);
    }
    
    getWallet(username: String): Observable<any>{
        
      return this.http.get(this.API_URL_USERS+'/fetchWallet/'+username);
    }
}
