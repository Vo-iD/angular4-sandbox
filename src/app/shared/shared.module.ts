import { NgModule } from '@angular/core';
import { ModalWindowService } from './modal/modal-window.service';
import { MinutesToTimePipe } from './pipes/minutes-to-time.pipe';

@NgModule({
  imports: [
  ],
  exports: [
    MinutesToTimePipe
  ],
  declarations: [
    MinutesToTimePipe
  ],
  providers: [
    ModalWindowService
  ]
})
export class SharedModule {
  public static forRoot() {
      return {
          ngModule: SharedModule,
          providers: [],
      };
   }
}
