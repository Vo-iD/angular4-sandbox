import { Component, OnInit } from '@angular/core';
import { AuthService, UserInfo } from '../../../auth/auth';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public userInfo: UserInfo;
  constructor(private _authService: AuthService) {
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

  private _updateUserInfo(): void {
    this.userInfo = this._authService.getUserInfo();
  }
}
