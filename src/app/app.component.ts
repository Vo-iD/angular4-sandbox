/**
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Angular 2 Test Project';
  public url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState
  ) {
    console.log('App is starting...');
  }

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }
}
