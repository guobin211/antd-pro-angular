import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { SideLayoutComponent } from './layout';
import { TopLayoutComponent } from './layout';
import { SideNavComponent } from './navigation';
import { TopNavComponent } from './navigation';
import { RouterModule } from '@angular/router';
import { IconsProviderModule } from './icons-provider.module';


@NgModule({
  declarations: [SideNavComponent, SideLayoutComponent, TopLayoutComponent, TopNavComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzLayoutModule,
    NzMenuModule,
    RouterModule,
    IconsProviderModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzLayoutModule,
    NzMenuModule,
    RouterModule,
    IconsProviderModule,
    SideLayoutComponent
  ]
})
export class SharedModule {
}
