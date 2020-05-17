import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { AboutComponent } from './about/about.component';


@NgModule({
  imports: [WelcomeRoutingModule],
  declarations: [AboutComponent],
  exports: []
})
export class WelcomeModule { }
