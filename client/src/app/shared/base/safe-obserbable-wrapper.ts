import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';

/*
Explanation:
This wrapper can help to manage observable subscriptions.

Using:
Extend this component when you have observable resources.
Use ngUnsibscribe as subject in .takeUntil().

Example:
  this._courseService
    .getList()
    .takeUntil(this.ngUnsubscribe)
    .subscribe((courses) => this.courses = courses);
*/

export abstract class SafeObservableWrapper implements OnDestroy {
  protected ngUnsubscribe: Subject<void> = new Subject<void>();

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
