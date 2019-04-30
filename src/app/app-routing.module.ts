import {Component, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CleaningComponent} from './cleaning/cleaning.component';
import {OrganizationComponent} from './organization/organization.component';
import {HouseKeepingComponent} from './house-keeping/house-keeping.component';
import {InteriorDesignComponent} from './interior-design/interior-design.component';
import {StagingComponent} from './staging/staging.component';
import {BecomeAProComponent} from './become-a-pro/become-a-pro.component';
import {LoginComponent} from './login/login.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {UserComponent} from './user/user.component';

const routes: Routes = [
  { path: 'cleaning', component: CleaningComponent },
  { path: 'housekeeping', component: HouseKeepingComponent},
  { path: 'organization', component: OrganizationComponent },
  { path: 'design', component: InteriorDesignComponent },
  { path: 'staging', component: StagingComponent },
  { path: 'pro', component: BecomeAProComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  {path: 'user', component: UserComponent},
  {path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
                                  CleaningComponent,
                                  HouseKeepingComponent,
                                  OrganizationComponent,
                                  InteriorDesignComponent,
                                  StagingComponent,
                                  BecomeAProComponent,
                                  LoginComponent,
                                  AboutComponent,
                                  HomeComponent
                                  ];
