import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserPageRoutingModule } from "./user-page-routing.module";
import { UserCenterComponent } from "./user-center/user-center.component";


@NgModule({
  declarations: [UserCenterComponent],
  imports: [
    CommonModule,
    UserPageRoutingModule
  ]
})
export class UserPageModule { }
