import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { routerAnimation } from './animations/router-anim';
import { environment } from '../environments/environment';

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
    console.log(environment);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.routerState = !this.routerState;
        this.routerStateCode = this.routerState ? 'active' : 'inactive';
      }
    });
  }

}
