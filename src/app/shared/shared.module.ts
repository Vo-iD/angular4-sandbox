import { NgModule } from '@angular/core';
import { ModalWindowService } from './modal/modal-window.service';
import { MinutesToTimePipe } from './pipes/minutes-to-time.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  imports: [
  ],
  exports: [
    MinutesToTimePipe,
    OrderByPipe
  ],
  declarations: [
    MinutesToTimePipe,
    OrderByPipe
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
