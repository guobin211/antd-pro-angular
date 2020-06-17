import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormPageRoutingModule } from './form-page-routing.module';
import { BasicFormComponent } from './basic-form/basic-form.component';


@NgModule({
  declarations: [BasicFormComponent],
  imports: [
    CommonModule,
    FormPageRoutingModule
  ]
})
export class FormPageModule { }
