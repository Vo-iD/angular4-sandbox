import { Injectable } from '@angular/core';
import { NgBlockUI, BlockUI } from 'ng-block-ui';

@Injectable()
export class SpinnerService {
  @BlockUI() private _blockUI: NgBlockUI;

  public show(): void {
    this._blockUI.start('Loading...');
  }

  public hide(): void {
    this._blockUI.stop();
  }
}