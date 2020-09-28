import { GetuserComponent } from './getuser/getuser.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllusersComponent } from './allusers/allusers.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { GetuserindexComponent } from './getuserindex/getuserindex.component';
const routes: Routes = [
  { path : '', component : HomeComponent},
  { path : 'allusers', component : AllusersComponent},
  { path : 'alluserlist', component : UserComponent},
  { path : 'getusers', component : GetuserindexComponent},
  { path : 'getusers/:id', component : GetuserComponent},
  { path : '**', component : PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [GetuserComponent, AllusersComponent, PageNotFoundComponent, HomeComponent, UserComponent,GetuserindexComponent ]