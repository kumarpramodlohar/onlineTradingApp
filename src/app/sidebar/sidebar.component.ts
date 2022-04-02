import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  collapseShow = "hidden";
  IsAdmin:boolean=false;
  ShowHide:string="";

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
  this.ShowHide=this.tokenStorage.getRoles();
  if(this.ShowHide=="ROLE_ADMIN") {
    this.IsAdmin=true;
  }
    
  }

  toggleCollapseShow(classes:any){
    
    this.collapseShow = classes;
  }

}
