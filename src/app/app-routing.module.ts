import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PackagesDisplayComponent } from './packages-display/packages-display.component';
import { FeaturesDisplayComponent } from './features-display/features-display.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'packages', component: PackagesDisplayComponent
  },
  {
    path: 'forecast/:package', component: FeaturesDisplayComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
