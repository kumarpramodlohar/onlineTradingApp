import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { TopsharesComponent } from './topshares/topshares.component';
import { IndustrysharesComponent } from './industryshares/industryshares.component';
import { FinancialChartMultipleDataComponent } from './financial-chart-multiple-data/financial-chart-multiple-data.component';
import { StockChartComponent } from './stock-chart/stock-chart.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import {FullComponentComponent} from './layouts/full/full-component/full-component.component';

const routes: Routes = [
  { path:'',component:LoginComponent},
  
 { path:"fullcomponents",
  component:FullComponentComponent},
  
  {
  
    path:"",
    component:FullComponentComponent,
    
  children: [
  {path:"", redirectTo:"/login", pathMatch:"full"},
  {path:"", redirectTo:"/login", pathMatch:"full"},
  {path:"**", redirectTo:"/login", pathMatch:"full"},
  { path:'topshares',component:TopsharesComponent},
  { path:'industryshares',component:IndustrysharesComponent},
  { path:'Chart',component:FinancialChartMultipleDataComponent},
  { path: 'home', component: HomeComponent },
  { path:'login',component:LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'signup', component: SignupComponent },
  {path: 'stockChart', component: StockChartComponent},
  {path: 'admindashboard', component: AdminDashboardComponent}
 
]
},

{path:"", redirectTo:"/login", pathMatch:"full"},
{path:"**", redirectTo:"/login", pathMatch:"full"},
  
];
  
/*
const routes: Routes = [
  {
    path:"",
    component:FullComponent,
    children: [
      {path:"", redirectTo:"/home", pathMatch:"full"},
      {path:"home", component:DashboardComponent},
      {path:"alerts", component:AlertsComponent},
      {path:"forms", component:FormsComponent},
      {path:"table", component:ProductComponent},
      {path:"grid-list", component:GridListComponent},
      {path:"menu", component:MenuComponent},
      {path:"tabs", component:TabsComponent},
      {path:"expansion", component:ExpansionComponent},
      {path:"chips", component:ChipsComponent},
      {path:"progress", component:ProgressComponent},
      {path:"toolbar", component:ToolbarComponent},
      {path:"progress-snipper", component:ProgressSnipperComponent},
      {path:"snackbar", component:SnackbarComponent},
      {path:"slider", component:SliderComponent},
      {path:"slide-toggle", component:SlideToggleComponent},
      {path:"tooltip", component:TooltipsComponent},
      {path:"button", component:ButtonsComponent},
    ]
  },

  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"**", redirectTo:"/home", pathMatch:"full"},
];
*/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
