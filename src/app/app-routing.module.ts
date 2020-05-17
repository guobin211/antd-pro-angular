import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'form', loadChildren: () => import('./pages/form-page/form-page.module').then(m => m.FormPageModule) },
  { path: 'list', loadChildren: () => import('./pages/list-page/list-page.module').then(m => m.ListPageModule) },
  { path: 'detail', loadChildren: () => import('./pages/detail-page/detail-page.module').then(m => m.DetailPageModule) },
  { path: 'result', loadChildren: () => import('./pages/result-page/result-page.module').then(m => m.ResultPageModule) },
  { path: 'error', loadChildren: () => import('./pages/error-page/error-page.module').then(m => m.ErrorPageModule) },
  { path: 'user', loadChildren: () => import('./pages/user-page/user-page.module').then(m => m.UserPageModule) },
  { path: 'editor', loadChildren: () => import('./pages/editor-page/editor-page.module').then(m => m.EditorPageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
