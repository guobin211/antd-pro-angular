import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./core/admin/admin.component";

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "/dashboard"},
  {path: "welcome", loadChildren: () => import("./pages/welcome/welcome.module").then(m => m.WelcomeModule)},
  {
    path: "dashboard",
    component: AdminComponent,
    canActivate: [],
    loadChildren: () => import("./pages/dashboard/dashboard.module").then(m => m.DashboardModule)
  },
  {path: "form",
    component: AdminComponent,
    canActivate: [],
    loadChildren: () => import("./pages/form-page/form-page.module").then(m => m.FormPageModule)},
  {path: "list",
    component: AdminComponent,
    canActivate: [],
    loadChildren: () => import("./pages/list-page/list-page.module").then(m => m.ListPageModule)},
  {
    path: "detail",
    component: AdminComponent,
    canActivate: [],
    loadChildren: () => import("./pages/detail-page/detail-page.module").then(m => m.DetailPageModule)
  },
  {
    path: "result",
    component: AdminComponent,
    canActivate: [],
    loadChildren: () => import("./pages/result-page/result-page.module").then(m => m.ResultPageModule)
  },
  {path: "user",
    component: AdminComponent,
    canActivate: [],
    loadChildren: () => import("./pages/user-page/user-page.module").then(m => m.UserPageModule)},
  {
    path: "editor",
    component: AdminComponent,
    canActivate: [],
    loadChildren: () => import("./pages/editor-page/editor-page.module").then(m => m.EditorPageModule)
  },
  {
    path: "**",
    redirectTo: "welcome"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: "enabled"
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
