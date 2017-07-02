import { Component } from '@angular/core';
import { UserInfo } from '../../../core/core';

@Component({
  selector: 'logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
    constructor(private _userInfo: UserInfo) {
  }

  public get authenticated(): boolean {
    return this._userInfo.isAuthenticated;
  }
}
