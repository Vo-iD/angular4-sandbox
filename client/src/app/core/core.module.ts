import { NgModule } from '@angular/core';
import { HttpService, UserInfo } from './core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [SharedModule],
  exports: [
  ],
  declarations: [
  ],
  providers: [
    UserInfo,
    HttpService
  ]
})
export class CoreModule {
}
