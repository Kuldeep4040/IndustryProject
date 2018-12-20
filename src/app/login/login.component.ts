import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm } from '@angular/forms';  



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  loginForm: FormGroup;  
  username:string='';
  password:string='';  

  constructor(private router : Router, private fb: FormBuilder) {
    this.loginForm = fb.group({  
      'username' : [null, Validators.required],  
      'password' : [null, Validators.required],  
     
      
    });  
  
  }

  // username : string
  // password : string

  // login() : void {
  //   if(this.username == 'admin' && this.password == 'admin'){
  //    this.router.navigate(["/admin"]);
     
  //   }
  //   else if(this.username == 'kd' && this.password == 'kd'){
  //     this.router.navigate(["/dashboard"]);
  //   }
  //   else {
      
  //     alert("Invalid credentials");
     
  //   }
  // }

  onFormSubmit(form:NgForm)  
{  
  console.log(this.loginForm.value.password);
  if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(["/admin"]);
       
       }
       else if(this.username == 'kd' && this.password == 'kd'){
         this.router.navigate(["/dashboard"]);
       }
       else {
        
       alert("Invalid credentials");
       
       }
  // localStorage.setItem('email', form.value.username);
  // localStorage.setItem('pass', form.value.password);
  // var uname=localStorage.getItem('email');
  // var pass=localStorage.getItem('pass');
  // if(uname == 'admin' && pass == 'admin'){
  //    this.router.navigate(["/admin"]);
       
  //     }
  //      else if(uname == 'kd' && pass == 'kd'){
  //       this.router.navigate(["/dashboard"]);
  //     }
  //     else {
        
  //     alert("Invalid credentials");
       
  //     }
}
}