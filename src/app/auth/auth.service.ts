import { Injectable } from '@angular/core';
import { UserInfo } from './auth.models';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private _userInfo: UserInfo;

  constructor(private _router: Router) {
    this.initStubUserInfo();
  }

  public login(login: string, password: string): void {
    console.log(`Try to login user ${login}...`);
    console.log('Success. Redirecting to home page...');
    this.initStubUserInfo();

    this._router.navigate(['courses']);
  }

  public logOut(): void {
    console.log('Logging out...');
    this._userInfo = null;
    console.log('Redirecting to login page');

    this._router.navigate(['login']);
  }

  public isAuthenticated(): boolean {
    return !!this._userInfo;
  }

  public getUserInfo(): UserInfo {
    return this._userInfo;
  }

  private initStubUserInfo(): void{
    this._userInfo = new UserInfo();

    this._userInfo.login = 'Captain Jack Sparrow';
    this._userInfo.firstName = 'Jack';
    this._userInfo.lastName = 'Sparrow';
    this._userInfo.role = 'Captain';
  }
}
