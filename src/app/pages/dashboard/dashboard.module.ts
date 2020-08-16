import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { AnalysisComponent } from "./analysis/analysis.component";
import { NzButtonModule } from "ng-zorro-antd";


@NgModule({
  declarations: [AnalysisComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NzButtonModule
  ]
})
export class DashboardModule { }
