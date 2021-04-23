import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  template: `
    <nav class="navbar">

      <!-- logo -->
      <div class="navbar-brand">
        <a class="navbar-item">
        <img src = "assets/img/invest.gif">
        </a>
      </div>
    </nav>
  `,
})
export class LoginComponent implements OnInit {

  value1: any;
  constructor() { }

  ngOnInit(): void {
  }
}
