import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  imports: [WelcomeRoutingModule],
  declarations: [AboutComponent, LoginComponent, RegisterComponent],
  exports: []
})
export class WelcomeModule { }
