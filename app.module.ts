import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FisdemoComponent } from './fisdemo/fisdemo.component';
import { LogindemoComponent } from './logindemo/logindemo.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DisplayComponent } from './display/display.component';
import { FormsModule } from '@angular/forms';
import { TestingComponent } from './testing/testing.component';

@NgModule({
  declarations: [
    AppComponent,
    FisdemoComponent,
    LogindemoComponent,
    LogoutComponent,
    LoginComponent,
    RegisterComponent,
    DisplayComponent,
    TestingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
