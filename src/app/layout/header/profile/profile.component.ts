import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService, UserInfo } from '../../../auth/auth';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public userInfo: UserInfo;

  constructor(public authService: AuthService, private _router: Router) {
  }

  public ngOnInit(): void {
    this.userInfo = {} as UserInfo;
    this.authService.userInfo.subscribe((info) => {
      this.userInfo = info;
    });
  }

  public logOut(): void {
    this.authService.logOut();
  }

  public goToLogin(): void {
    this._router.navigate(['login']);
  }
}
