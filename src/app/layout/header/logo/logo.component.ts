import { Component } from '@angular/core';
import { AuthService } from '../../../auth/auth';

@Component({
  selector: 'logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent {
    constructor(private _authService: AuthService) {
  }

  public get authenticated(): boolean {
    return this._authService.isAuthenticated();
  }
}
