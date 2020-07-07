import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FlowComponent } from "./flow/flow.component";


const routes: Routes = [
  { path: "flow", component: FlowComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorPageRoutingModule { }
