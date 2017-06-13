import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthService } from './auth.service';
import { LoginPageComponent } from './login/login-page.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    LoginPageComponent
  ],
  declarations: [
    LoginPageComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
