import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
const routes: Routes = [
 
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);