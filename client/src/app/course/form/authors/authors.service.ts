import { Injectable } from '@angular/core';
import { SafeObservableWrapper } from '../../../shared/shared';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Author } from '../../models/author';

@Injectable()
export class AuthorsService extends SafeObservableWrapper {
  constructor(private _http: Http) {
    super();
  }

  public getList(): Observable<Author[]> {
    const authors: Subject<Author[]> = new Subject();
    this._http.get('authors')
      .takeUntil(this.ngUnsubscribe)
      .subscribe((response) => {
        const authorsList = response.json() as Author[];

        authors.next(authorsList);
      });

    return authors;
  }
}
