import { Injectable } from '@angular/core';
import { User } from './models/user';

@Injectable()
export class UserInfo {
  public login: string;
  public firstName: string;
  public lastName: string;
  public authToken: string;

  // tslint:disable-next-line:no-empty
  constructor() {
  }

  public clean() {
    this.update({
      fakeToken: '',
      login: '',
      name: {
        first: '',
        last: ''
      },
      id: 0
    });
  }

  public update(user: User) {
    this.login = user.login;
    this.firstName = user.name.first;
    this.lastName = user.name.last;
    this.authToken = user.fakeToken;
  }

  public get isAuthenticated(): boolean {
    return !!(this.authToken && this.login);
  }
}
