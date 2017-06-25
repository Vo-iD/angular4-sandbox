import { Injectable } from '@angular/core';
import {
  Http,
  Request,
  Response,
  RequestOptionsArgs,
  XHRBackend,
  RequestOptions
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { SpinnerService } from '../../shared/shared';
import { UserInfo } from '../core';

@Injectable()
export class HttpService extends Http {
  private host = 'http://localhost:3004/';

  constructor(
    backend: XHRBackend,
    options: RequestOptions,
    private _spinnerService: SpinnerService
  ) {
    super(backend, options);
  }

  public request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    if (typeof url === 'string') {
      url = this.host + url;
    } else {
      url.url = this.host + url.url;
    }

    this._spinnerService.show();

    const requestObservable = super.request(url, options);

    requestObservable.subscribe(
      () => { this._spinnerService.hide(); },
      (res: Response) => {
        this._spinnerService.hide();
      });

    return requestObservable;
  }
}
