import { Injectable, ApplicationRef } from '@angular/core';
import { UserInfo } from './auth.models';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  public userInfo: UserInfo;

  constructor(private _router: Router, private _appRef: ApplicationRef) {
    this.initStubUserInfo();
  }

  public login(login: string, password: string): void {
    console.log(`Try to login user ${login}...`);
    console.log('Success. Redirecting to home page...');
    this.initStubUserInfo();

    this._router.navigate(['courses']);
    this._appRef.tick();
  }

  public logOut(): void {
    console.log('Logging out...');
    this.userInfo = null;
    console.log('Redirecting to login page');

    this._router.navigate(['login']);
    this._appRef.tick(); // todo remove??
  }

  public isAuthenticated(): boolean {
    const result = !!this.userInfo;
    return result;
  }

  private initStubUserInfo(): void {
    this.userInfo = new UserInfo();

    this.userInfo.login = 'Captain Jack Sparrow';
    this.userInfo.firstName = 'Jack';
    this.userInfo.lastName = 'Sparrow';
    this.userInfo.role = 'Captain';
  }
}
