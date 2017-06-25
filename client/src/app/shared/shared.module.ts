import { NgModule } from '@angular/core';
import { ModalWindowService, SpinnerService } from './shared';
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
    ModalWindowService,
    SpinnerService
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
