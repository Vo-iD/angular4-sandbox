import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth';
import { SafeObservableWrapper } from '../../shared/shared';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent extends SafeObservableWrapper {
  public userLogin: string;
  public userPass: string;
  public creadentialsAreCorrect = true;

  constructor(private _authService: AuthService, private _router: Router) {
    super();
  }

  public login(): void {
    const loginOperation = this._authService.login(this.userLogin, this.userPass);

    loginOperation
      .takeUntil(this.ngUnsubscribe)
      .subscribe((result: boolean) => {
        if (result) {
          this._router.navigate(['courses']);
        }

        this.creadentialsAreCorrect = result;
      });
  }
}
