import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ListPageRoutingModule } from "./list-page-routing.module";
import { BasicListComponent } from "./basic-list/basic-list.component";


@NgModule({
  declarations: [BasicListComponent],
  imports: [
    CommonModule,
    ListPageRoutingModule
  ]
})
export class ListPageModule { }
