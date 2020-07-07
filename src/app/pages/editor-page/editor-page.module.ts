import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EditorPageRoutingModule } from "./editor-page-routing.module";
import { FlowComponent } from "./flow/flow.component";


@NgModule({
  declarations: [FlowComponent],
  imports: [
    CommonModule,
    EditorPageRoutingModule
  ]
})
export class EditorPageModule { }
