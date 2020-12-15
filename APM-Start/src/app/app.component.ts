import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `<nav class="navbar navbar-expand bg-dark bg-gradient">
      <ul class="nav nav-pills">
        <li>
          <a
            class="nav-link"
            routerLinkActive="active"
            [routerLink]="['/welcome']"
            >Home</a
          >
        </li>
        <li>
          <a
            class="nav-link"
            routerLinkActive="active"
            [routerLink]="['/products']"
            >Guerreros Z</a
          >
        </li>
      </ul>
    </nav>
    <div class="container ">
      <router-outlet></router-outlet>
    </div>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular: Getting Started';
}
