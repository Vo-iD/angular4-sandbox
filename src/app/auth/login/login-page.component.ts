import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../auth';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent {
  public userLogin: string;
  public userPass: string;

  constructor(private _authService: AuthService) {
  }

  public login(): void {
    this._authService.login(this.userLogin, this.userPass);
  }
}
