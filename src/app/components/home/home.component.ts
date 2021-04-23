import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  template: `
    <nav class="navbar">

      <!-- logo -->
      <div class="navbar-brand">
        <a class="navbar-item">
        <img src="assets/img/bg1.jpg">
        </a>
      </div>
    </nav>
  `,
  styles: [`
    .hero {
      background-image: url('/assets/img/sm.gif') !important;
      background-size: cover;
      background-position: center center;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
