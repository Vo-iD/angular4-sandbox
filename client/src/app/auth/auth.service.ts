import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';

import { Subject } from 'rxjs/Subject';

import { SafeObservableWrapper } from '../shared/shared';

import { UserInfo } from './auth';
import { User } from './models/user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService extends SafeObservableWrapper {
  public userInfo: Subject<UserInfo> = new Subject();
  private _isAuthenticated = false;

  constructor(private _router: Router, private _http: Http) {
    super();

    this.userInfo.subscribe((userInfo) => {
      this._isAuthenticated = !!userInfo;
    });
  }

  public login(login: string, password: string): Subject<boolean> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('login', login);
    params.set('password', password);
    const options = new RequestOptions();
    options.search = params;

    const loginOperation = new Subject();
    this._http.get(`users`, options)
      .takeUntil(this.ngUnsubscribe)
      .subscribe((response) => {
        const users = response.json() as User[];
        if (users && users.length === 1) {
          this._initUserInfo(users[0]);
          loginOperation.next(true);
        } else {
          loginOperation.next(false);
        }
      });

    return loginOperation;
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

  private _initUserInfo(user: User): void {
    const userInfo = new UserInfo();

    userInfo.login = user.login;
    userInfo.firstName = user.name.first;
    userInfo.lastName = user.name.last;
    userInfo.authToken = user.fakeToken;

    this.userInfo.next(userInfo);
  }
}
