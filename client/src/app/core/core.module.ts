import { NgModule } from '@angular/core';
import { HttpService } from './core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [SharedModule],
  exports: [
  ],
  declarations: [
  ],
  providers: [
    HttpService
  ]
})
export class CoreModule {
}
