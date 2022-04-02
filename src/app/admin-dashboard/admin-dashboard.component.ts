import { Component, OnInit, Output } from '@angular/core';
import { UserService } from '../_services/user.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  @Output() users: any; 
  isLoggedIn : boolean = true;
  x : boolean;

 

  constructor(private userService:UserService) { 
    this.isLoggedIn=true;
  }

  userForm: FormGroup;
  ngOnInit(): void {
    this.userService.getUsers().subscribe(data =>{  
      this.users =data;   
      })
  }
  userDeactivate(client_id: string){
    this.x = confirm("Are You Sure?"+ client_id);
    if(this.x == true){
      this.userService.userDeactivate(client_id)
      .subscribe(data => {
        //if(data.status === 200) {
        alert('User Deactivate successfully.');
         location.reload();
        //}else {
        // alert(data.message);
        //}
      },
      error => {
        alert(error);
      });
    }
    };

    ngOnChanges(){
      this.isLoggedIn = true;
    }
    ngAfterViewInit(){
      this.isLoggedIn = true;
    }

}
