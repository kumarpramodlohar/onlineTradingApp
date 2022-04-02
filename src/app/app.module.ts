import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,  ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { MatTabsModule } from '@angular/material/tabs';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { TopsharesComponent } from './topshares/topshares.component';
import { DummyComponent } from './dummy/dummy.component';
import { FinancialChartMultipleDataComponent } from './financial-chart-multiple-data/financial-chart-multiple-data.component';
import { 
	IgxFinancialChartModule,
	IgxLegendModule
 } from "igniteui-angular-charts";

 import { FinancialDataService } from "./_services/financial-data.service";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {SidebarComponent} from './sidebar/sidebar.component';
import {NotificationDropdownComponent} from './dropdowns/notification-dropdown/notification-dropdown.component';
import {UserDropdownComponent} from './dropdowns/user-dropdown/user-dropdown.component';
import {IndustrysharesComponent} from './industryshares/industryshares.component';
import { StockChartComponent } from './stock-chart/stock-chart.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { Watchlist1Component } from './watchlist1/watchlist1.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FullComponentComponent } from './layouts/full/full-component/full-component.component';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { DemoFlexyModule } from './demo-flexy-module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    DashboardComponent,
    SignupComponent,
  
    DummyComponent,
    FinancialChartMultipleDataComponent,
    TopsharesComponent,
    SidebarComponent,
    NotificationDropdownComponent,
    UserDropdownComponent,
    IndustrysharesComponent,
    StockChartComponent,
    UserdetailsComponent,
    WatchlistComponent,
    Watchlist1Component,
    AdminDashboardComponent,
    FullComponentComponent,
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IgxFinancialChartModule,
    IgxLegendModule,
    FeatherModule.pick(allIcons),
    BrowserAnimationsModule,
    DemoFlexyModule,
    MatTabsModule
    
   // TopsharesComponent,
   // SidebarComponent
 
  ],
  providers: [authInterceptorProviders,FinancialDataService],
  bootstrap: [AppComponent],
  entryComponents: [],
  schemas: []
})
export class AppModule { }
