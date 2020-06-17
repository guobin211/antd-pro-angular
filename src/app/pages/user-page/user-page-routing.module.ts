import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCenterComponent } from './user-center/user-center.component';


const routes: Routes = [
  { path: 'user-center', component: UserCenterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPageRoutingModule { }
