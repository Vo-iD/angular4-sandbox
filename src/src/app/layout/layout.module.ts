import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderModule, HeaderComponent } from './header/header.module';

@NgModule({
  imports: [
    HeaderModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent
  ],
  declarations: [
    FooterComponent
  ]
})
export class LayoutModule { }

export {
  HeaderComponent,
  FooterComponent
}
