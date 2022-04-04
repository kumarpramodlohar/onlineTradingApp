import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  private AUTH_API= environment.API_URL;
  //private AUTH_API = 'http://ec2-52-38-131-69.us-west-2.compute.amazonaws.com:8080/api/';


  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const credential = 'username=' + username + '&password=' + password;

    const config = {
      headers: new HttpHeaders().set(
        'Content-Type',
        'application/x-www-form-urlencoded'
      ),
    };

    console.log(credential);
    return this.http.post(this.AUTH_API +'/api/login', credential, config);
  }


  register(first_name:string,last_name:string,email:string,mobile:number, dob:Date,aadhar:string,pan:string,country:string,state:string, city:string,pin:number,address:string): Observable<any> {
    const config = {
      headers: new HttpHeaders()
      .set(
        'Content-Type',
        'application/JSON'
      )
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')

    };
    return this.http.post(
      this.AUTH_API + '/api/registration/save',
      JSON.stringify({
        first_name,last_name,email,mobile, dob,aadhar,pan,country,state, city,pin,address
      }),config
     
    );
  }
  signup(name: string, username: string, password: string,college_name: string,mobile_no:string): Observable<any> {
    const config = {
      headers: new HttpHeaders().set(
        'Content-Type',
        'application/JSON'
      ),
    };
    return this.http.post(
      this.AUTH_API + '/api/signup',
      JSON.stringify({
        name,
        username,
        password,
        college_name,
        mobile_no
      })
      ,config
    );
  }
  getMarket(): Observable<any> {  
    return this.http.get(this.AUTH_API+'/api/marketFeed');
} 
}
