import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import {UserdetailsService} from '../_services/userdetails.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
token:any;

  constructor(private userdetails: UserdetailsService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    //this.token=this.tokenStorage.getToken();
    //console.log("Token---- "+this.token);
  }

}
