import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';


import { AppModule } from './app.module';
import { AppComponent } from './app.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { zh_CN, NZ_I18N, NzI18nModule } from 'ng-zorro-antd/i18n';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    NoopAnimationsModule,
    HttpClientModule,
    NzI18nModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN }
  ]
})
export class AppServerModule { }
