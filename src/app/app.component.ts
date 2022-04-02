import { Component, OnInit, OnDestroy  } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
import { EventBusService } from './_services/event-bus-service.service';
import { Subscription } from 'rxjs/internal/Subscription';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  /* implements OnInit, OnDestroy
  [x: string]: any;
  private roles: string[] = [];
  isLoggedIn = false;
  //showAdminBoard = false;
 // showModeratorBoard = false;
  username?: string;
  eventBusSub?: Subscription;
  
  constructor(private tokenStorageService: TokenStorageService,private eventBusService: EventBusService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = this.tokenStorageService.getRoles();

      //this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      //this.showModeratorBoard = this.roles.includes('ROLE_USER');

      this.username = user.username;
    }
    this.eventBusSub = this.eventBusService.on('logout', () => {
      this.logout();
    });

  }
ngOnDestroy(): void {
    if (this.eventBusSub)
      this.eventBusSub.unsubscribe();
  }
  logout(): void {
    this.tokenStorageService.signOut();
    this.isLoggedIn = false;
    this.roles = [];
   // this.showAdminBoard = false;
    //this.showModeratorBoard = false;
  }
  */
}
