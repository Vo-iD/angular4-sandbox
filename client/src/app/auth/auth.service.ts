import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { UserInfo } from './auth.models';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  public userInfo: Subject<UserInfo> = new Subject();
  private _isAuthenticated = false;

  constructor(private _router: Router) {
    this.userInfo.subscribe((userInfo) => {
      this._isAuthenticated = !!userInfo;
    });

    setTimeout(() => this._initStubUserInfo(), 500); // imitating call to the server
  }

  public login(login: string, password: string): void {
    console.log(`Try to login user ${login}...`);
    console.log('Success. Redirecting to home page...');
    this._initStubUserInfo();

    this._router.navigate(['courses']);
  }

  public logOut(): void {
    console.log('Logging out...');

    this.userInfo.next(null);

    console.log('Redirecting to login page');

    this._router.navigate(['login']);
  }

  public isAuthenticated(): boolean {
    return this._isAuthenticated;
  }

  private _initStubUserInfo(): void {
    const userInfo = new UserInfo();

    userInfo.login = 'Captain Jack Sparrow';
    userInfo.firstName = 'Jack';
    userInfo.lastName = 'Sparrow';
    userInfo.role = 'Captain';

    this.userInfo.next(userInfo);
  }
}
