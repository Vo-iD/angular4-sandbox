import { NgModule } from '@angular/core';

import { LogoComponent } from './logo/logo.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule
  ],
  exports: [
    HeaderComponent,
  ],
  declarations: [
    LogoComponent,
    ProfileComponent,
    HeaderComponent
  ]
})
export class HeaderModule { }

export {
  HeaderComponent
}
