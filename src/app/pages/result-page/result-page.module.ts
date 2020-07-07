import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ResultPageRoutingModule } from "./result-page-routing.module";
import { SuccessComponent } from "./success/success.component";
import { FailComponent } from "./fail/fail.component";


@NgModule({
  declarations: [SuccessComponent, FailComponent],
  imports: [
    CommonModule,
    ResultPageRoutingModule
  ]
})
export class ResultPageModule { }
