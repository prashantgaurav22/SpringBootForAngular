import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component'
import { SuccessComponent } from './success/success.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'search', component: SearchComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'success', component: SuccessComponent },
  
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
