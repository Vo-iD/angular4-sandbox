/**
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  NgZone
} from '@angular/core';
import { AppState } from './app.service';

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Angular 2 Test Project';
  public url = 'https://twitter.com/AngularClass';
  private _changeDetectionWatcher: Date;

  constructor(
    private _ngZone: NgZone,
    public appState: AppState
  ) {
    console.log('App is starting...');
  }

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
    this._ngZone.onUnstable.subscribe(() => {
      this._changeDetectionWatcher = new Date();
    });

    this._ngZone.onStable.subscribe(() => {
      if (this._changeDetectionWatcher) {
        const timeDiff = new Date().getTime() - this._changeDetectionWatcher.getTime();
        console.log(`Elapsed time on detection stabilization: ${timeDiff} ms`);
      }
    });
  }
}
