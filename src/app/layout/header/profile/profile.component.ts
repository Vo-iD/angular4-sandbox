import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService, UserInfo } from '../../../auth/auth';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor(public authService: AuthService, private _router: Router) {
  }

  public logOut(): void {
    this.authService.logOut();
  }

  public goToLogin(): void {
    this._router.navigate(['login']);
  }
}
