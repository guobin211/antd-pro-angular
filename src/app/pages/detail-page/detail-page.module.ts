import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailPageRoutingModule } from './detail-page-routing.module';
import { BasicDetailComponent } from './basic-detail/basic-detail.component';


@NgModule({
  declarations: [BasicDetailComponent],
  imports: [
    CommonModule,
    DetailPageRoutingModule
  ]
})
export class DetailPageModule { }
