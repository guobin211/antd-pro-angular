import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgxImageModule } from 'ngx-image';


@NgModule({
  imports: [WelcomeRoutingModule, NgxImageModule],
  declarations: [AboutComponent, LoginComponent, RegisterComponent],
  exports: []
})
export class WelcomeModule { }
