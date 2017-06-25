import { NgModule } from '@angular/core';

import { AuthModule } from '../auth/auth';

import { FooterComponent } from './footer/footer.component';
import { HeaderModule, HeaderComponent } from './header/header.module';

@NgModule({
  imports: [
    AuthModule,
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
