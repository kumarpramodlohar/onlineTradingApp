import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

const TOKEN_KEY = 'auth-token';
const REFRESHTOKEN_KEY = 'auth-refreshtoken';
const USER_KEY = 'auth-user';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  //decodeToken: any;
  constructor(private router: Router) { }

  signOut(): void {
    localStorage.removeItem("token");
    this.router.navigateByUrl("/login");
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    //console.log("in login "+JSON.stringify(user));
  }
  public saveRefreshToken(token: string): void {
    window.sessionStorage.removeItem(REFRESHTOKEN_KEY);
    window.sessionStorage.setItem(REFRESHTOKEN_KEY, token);
  }
  public getRefreshToken(): string | null {
    return window.sessionStorage.getItem(REFRESHTOKEN_KEY);
  }
public getRoles(): any {
  const rawToken=window.sessionStorage.getItem(TOKEN_KEY);
  const decodeToken=helper.decodeToken(rawToken);;
  console.log(decodeToken.roles[0]);
  return decodeToken.roles[0];
}
  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);

    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
}
