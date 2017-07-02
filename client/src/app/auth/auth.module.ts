import { NgModule, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthService } from './auth';
import { LoginPageComponent } from './login/login-page.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    FormsModule,
    CoreModule,
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
