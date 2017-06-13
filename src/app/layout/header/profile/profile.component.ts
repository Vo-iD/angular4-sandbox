import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService, UserInfo } from '../../../auth/auth';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public userInfo: UserInfo;
  constructor(private _authService: AuthService, private _router: Router) {
  }

  public ngOnInit(): void {
    this._updateUserInfo();
  }

  public get authenticated(): boolean {
    return this._authService.isAuthenticated();
  }

  public logOut(): void {
    this._authService.logOut();
  }

  public goToLogin(): void {
    this._router.navigate(['login']);
  }

  private _updateUserInfo(): void {
    this.userInfo = this._authService.getUserInfo();
  }
}
