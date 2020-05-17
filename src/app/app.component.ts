import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { routerAnimation } from './animations/router-anim';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    routerAnimation
  ]
})
export class AppComponent {
  routerState = true;
  routerStateCode = 'active';
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.routerState = !this.routerState;
        this.routerStateCode = this.routerState ? 'active' : 'inactive';
      }
    });
  }

}
