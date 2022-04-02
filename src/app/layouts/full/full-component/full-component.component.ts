import { Component,OnInit,Output  } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import{TokenStorageService} from  'src/app/_services/token-storage.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';

interface sidebarMenu {
  link: string;
  icon: string;
  menu: string;
}

@Component({
  selector: 'app-full-component',
  templateUrl: './full-component.component.html',
  styleUrls: ['./full-component.component.scss']
})
export class FullComponentComponent implements OnInit{
  userDisplayName ='';
  search: boolean = false;
  isLoggedIn:boolean;
  IsAdmin:boolean=false;
  ShowHide:string="";
  @Output() walletBalance: any;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private tokenStorage: TokenStorageService,
    private router: Router, private userService: UserService) { }

  routerActive: string = "activelink";

  sidebarMenu: sidebarMenu[] = [
    {
      link: "/topshares",
      icon: "home",
      menu: "Home",
    },
    {
      link: "/admindashboard",
      icon: "tv",
      menu: "Dashboard",
    },
    {
      link: "/a",
      icon: "voicemail",
      menu: "Watch List",
    },
    {
      link: "/b",
      icon: "book",
      menu: "PortFolio",
    },
    {
      link: "/c",
      icon: "book",
      menu: "Fund Ledger",
    },
    {
      link: "/d",
      icon: "file-text",
      menu: "Reports",
    },
    {
      link: "/e",
      icon: "list",
      menu: "Ideas",
    },
    {
      link: "/f",
      icon: "credit-card",
      menu: "Mutual Funds",
    },
    {
      link: "/g",
      icon: "bar-chart-2",
      menu: "Market Analysis"
    }
    ]
    ngOnInit(): void {
      this.userDisplayName = this.tokenStorage.getUser();
      this.isLoggedIn=true;

    this.ShowHide=this.tokenStorage.getRoles();
  if(this.ShowHide=="ROLE_ADMIN") {
    this.IsAdmin=true;
  }

  this.removeAdminDashboard();

  this.userService.getWallet(this.userDisplayName).subscribe(data =>{  
   
    this.walletBalance=data[0].balance;
   
    });

  }

      logout(): void {
        this.tokenStorage.signOut();

        
      }

      removeAdminDashboard(): void {
        if(!this.IsAdmin) {
        this.sidebarMenu = this.sidebarMenu.filter(({ link }) => link !== '/admindashboard');  
       
        }
      }
}
