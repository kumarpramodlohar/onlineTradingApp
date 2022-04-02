import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import {Router} from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
 // roles: string[] = [];
  roles: string ="";

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,private router:Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getRoles();

    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe(
      data => {

        console.log(data.status);
        this.tokenStorage.saveToken(data.access_token);
        this.tokenStorage.saveUser(username);
        this.tokenStorage.saveRefreshToken(data.refresh_token);
        this.isLoginFailed = false;

        this.isLoggedIn = true;
        this.router.navigateByUrl('/fullcomponents');
        this.roles = this.tokenStorage.getRoles();
        sessionStorage.setItem('loggedUser', username);
       // console.log(this.roles);
       // this.reloadPage();
      },
      
      
      err => {

        console.log("in error");
       // this.errorMessage = err.error.message;
       this.isLoggedIn = false;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}
