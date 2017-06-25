import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';

import { Subject } from 'rxjs/Subject';

import { SafeObservableWrapper } from '../shared/shared';
import { User } from '../core/models/user';

import { Observable } from 'rxjs/Observable';
import { UserInfo } from '../core/core';

@Injectable()
export class AuthService extends SafeObservableWrapper {

  constructor(private _router: Router, private _userInfo: UserInfo, private _http: Http) {
    super();
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
          this._userInfo.update(users[0]);
          loginOperation.next(true);
        } else {
          loginOperation.next(false);
        }
      });

    return loginOperation;
  }

  public logOut(): void {
    console.log('Logging out...');

    this._userInfo.clean();

    console.log('Redirecting to login page');

    this._router.navigate(['login']);
  }

  public isAuthenticated(): boolean {
    return !!this._userInfo.authToken;
  }
}
