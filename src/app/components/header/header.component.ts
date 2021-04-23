import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  template: `
    <nav class="navbar">

      <!-- logo -->
      <div class="navbar-brand">
        <a class="navbar-item">
        <img src="assets/img/Logo.png">
        </a>
      </div>
    </nav>
  `,
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
