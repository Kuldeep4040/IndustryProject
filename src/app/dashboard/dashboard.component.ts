import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getUserEmail() {
    return localStorage.getItem('email');
  }

  logout() {
    localStorage.removeItem('email');
    this.router.navigateByUrl('/');
  }

}
