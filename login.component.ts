import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  
  name = '';
  city = 'pune';
  password ='';
  isvalid='';

  constructor(private routes : Router){


  }
ValidateUser():void {
  
  if (this.name=='Pratham' && this.password =="12345"){


    this.isvalid="Authorised User"
    console.log("User Authenticated")
    this.routes.navigateByUrl("/display")
  }
  else{
    this.isvalid="Unauthorised User"

    console.log("Invalid User ")
    this.routes.navigateByUrl("/register")
  }
  
  
  //throw new Error('Function not implemented.');
}
}
