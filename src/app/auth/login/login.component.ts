import { Component } from '@angular/core';
import { AuthService } from '../auth';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public userLogin: string;
  public userPass: string;

  constructor(private _authService: AuthService) {
  }

  public login(): void {
    this._authService.login(this.userLogin, this.userPass);
  }
}
