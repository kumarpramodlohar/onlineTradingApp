import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: any = {
    name: null,
    username: null,
    password: null,
    college_name : null,
    mobile_no : null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { name, username, password, college_name, mobile_no } = this.form;

    this.authService.signup(name, username, password,college_name,mobile_no).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true
        this.isSignUpFailed = false;
        
      },
      err => {
        console.log('In error');
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
