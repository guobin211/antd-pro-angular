import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormPageRoutingModule } from "./form-page-routing.module";
import { BasicFormComponent } from "./basic-form/basic-form.component";
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [BasicFormComponent],
  imports: [
    CommonModule,
    FormPageRoutingModule,
    SharedModule
  ]
})
export class FormPageModule { }
