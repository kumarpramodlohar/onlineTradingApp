import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    first_name: null,
    last_name: null,
    email: null,
    mobile: 0,
    dob: null,
    aadhar: null,
    pan: null,
    country:null,
    state: null,
    city: null,
    pin: null,
    address: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { first_name,last_name,email,mobile,
      dob,
      aadhar,
      pan,
      country,
      state,
      city,
      pin,
      address } = this.form;

    this.authService.register(first_name,last_name,email,mobile, dob,aadhar,pan,country,state, city,pin,address).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
