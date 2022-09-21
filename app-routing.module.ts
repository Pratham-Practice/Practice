import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TestingComponent } from './testing/testing.component';

const routes: Routes = [
  
{path:'login', component: LoginComponent},
{path:'register', component: RegisterComponent},
{path:'display', component: DisplayComponent},
{path:'testing', component: TestingComponent},
{path:'', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
