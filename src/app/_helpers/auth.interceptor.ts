
import { HTTP_INTERCEPTORS, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {

  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from "@angular/common/http";
import { TokenStorageService } from '../_services/token-storage.service';
import { AuthService } from '../_services/auth.service';
import { throwError, Observable, BehaviorSubject, of} from "rxjs";
import { catchError, filter, switchMap, take } from 'rxjs/operators';

 const TOKEN_HEADER_KEY = 'Authorization';       // for Spring Boot back-end
//const TOKEN_HEADER_KEY = 'x-access-token';   // for Node.js Express back-end

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  
  constructor(private authService: AuthService, private token: TokenStorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<Object>> {
    let authReq = req;
    const token = this.token.getToken();
    console.log(token);
    if (token != null) {
      authReq = this.addTokenHeader(req, token);
    }
    return next.handle(authReq).pipe(catchError(error => {
      if (error instanceof HttpErrorResponse && !authReq.url.includes('api/login') && error.status === 401) {
        return this.handle401Error(authReq, next);
      }
      return throwError(error);
    }));
  }
  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);
      const token = this.token.getRefreshToken();
      if (token)
       
          switchMap((token: any) => {
            this.isRefreshing = false;
            this.token.saveToken(token.access_token);
            this.refreshTokenSubject.next(token.access_token);
            
            return next.handle(this.addTokenHeader(request, token.access_token));
          }),
          catchError((err) => {
            this.isRefreshing = false;
            
            this.token.signOut();
            return throwError(err);
          });
    }
    return this.refreshTokenSubject.pipe(
      filter(token => token !== null),
      take(1),
      switchMap((token) => next.handle(this.addTokenHeader(request, token)))
    );
  }
  private addTokenHeader(request: HttpRequest<any>, token: string) {
    /* for Spring Boot back-end */
     return request.clone({ headers: request.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
    /* for Node.js Express back-end */
   // return request.clone({ headers: request.headers.set(TOKEN_HEADER_KEY, token) });
  }
}
export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];