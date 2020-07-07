import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BasicListComponent } from "./basic-list/basic-list.component";


const routes: Routes = [
  { path: "basic-list", component: BasicListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListPageRoutingModule { }
