import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LogoComponent } from './logo/logo.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
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
