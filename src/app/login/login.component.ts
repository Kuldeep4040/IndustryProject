import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onFormSubmit(data) {

    console.log(data);
    localStorage.setItem('email', data.email);
    localStorage.setItem('pass', data.password);
    var email=localStorage.getItem('email');
    var pass=localStorage.getItem('pass');
    if(email=='admin@gmail.com' && pass=='123456'){
      
    this.router.navigateByUrl('/dashboard');
  }
  else{
   console.log("error while login");
  }
  }

}
