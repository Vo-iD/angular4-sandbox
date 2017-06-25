import { Injectable } from '@angular/core';
import { NgBlockUI, BlockUI } from 'ng-block-ui';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SpinnerService {
  private _block: Subject<boolean> = new Subject();
  @BlockUI() private _blockUI: NgBlockUI;

  constructor() {
    this._block.subscribe((blockRequested) => {
      if (blockRequested) {
        this._blockUI.start('Loading...');
      } else {
        this._blockUI.stop();
      }
    });
  }

  public show(): void {
    this._block.next(true);
  }

  public hide(): void {
    this._block.next(false);
  }
}