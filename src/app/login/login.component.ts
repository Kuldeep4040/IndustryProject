import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  
  constructor(private router : Router) {
  }

  username : string
  password : string

  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(["/admin"]);
     
    }
    else if(this.username == 'kd' && this.password == 'kd'){
      this.router.navigate(["/dashboard"]);
    }
    else {
      
      alert("Invalid credentials");
     
    }
  }
}